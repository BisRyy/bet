import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useCallback, useMemo } from 'react';
import {
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';
// utils
import axios from '../utils/axios';
// routes
import { PATH_AUTH } from '../routes/paths';
// config
import { COGNITO_API } from '../config-global';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === 'AUTH') {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

const userPool = new CognitoUserPool({
  UserPoolId: COGNITO_API.userPoolId || '',
  ClientId: COGNITO_API.clientId || '',
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserAttributes = useCallback(
    (currentUser) =>
      new Promise((resolve, reject) => {
        currentUser.getUserAttributes((error, attributes) => {
          if (error) {
            reject(error);
            console.error(error);
          } else {
            const results = {};

            attributes?.forEach((attribute) => {
              results[attribute.Name] = attribute.Value;
            });

            resolve(results);
          }
        });
      }),
    []
  );

  const getSession = useCallback(
    () =>
      new Promise((resolve, reject) => {
        const cognitoUser = userPool.getCurrentUser();

        if (cognitoUser) {
          cognitoUser.getSession(async (error, session) => {
            if (error) {
              reject(error);
              console.error(error);
            }
            const attributes = await getUserAttributes(cognitoUser);

            const token = session?.getIdToken().getJwtToken();

            // use the token or Bearer depend on the wait BE handle, by default amplify API only need to token.
            axios.defaults.headers.common.Authorization = token;

            resolve({
              cognitoUser,
              session,
              headers: {
                Authorization: token,
              },
            });

            dispatch({
              type: 'AUTH',
              payload: {
                isAuthenticated: true,
                user: {
                  ...cognitoUser,
                  ...attributes,
                  displayName: attributes.name,
                  role: 'admin',
                },
              },
            });
          });
        } else {
          dispatch({
            type: 'AUTH',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      }),
    [getUserAttributes]
  );

  const initialize = useCallback(async () => {
    try {
      await getSession();
    } catch {
      dispatch({
        type: 'AUTH',
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [getSession]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // We make sure to handle the user update here, but return the resolve value in order for our components to be
  // able to chain additional `.then()` logic. Additionally, we `.catch` the error and "enhance it" by providing
  // a message that our React components can use.

  // LOGIN
  const login = useCallback(
    (email, password) =>
      new Promise((resolve, reject) => {
        const userData = new CognitoUser({
          Username: email,
          Pool: userPool,
        });

        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });

        userData.authenticateUser(authDetails, {
          onSuccess: (result) => {
            getSession();
            resolve(result);
          },
          onFailure: (error) => {
            reject(error);
          },
        });
      }),
    [getSession]
  );

  // REGISTER
  const register = useCallback(
    (email, password, firstName, lastName) =>
      new Promise((resolve, reject) => {
        const newAttributes = [
          new CognitoUserAttribute({
            Name: 'email',
            Value: email,
          }),
          new CognitoUserAttribute({
            Name: 'name',
            Value: `${firstName} ${lastName}`,
          }),
        ];

        userPool.signUp(email, password, newAttributes, [], async (error) => {
          if (error) {
            reject(error);
            console.error(error);
            return;
          }

          resolve(undefined);
          window.location.href = PATH_AUTH.login;
        });
      }),
    []
  );

  // LOGOUT
  const logout = useCallback(() => {
    const cognitoUser = userPool.getCurrentUser();

    if (cognitoUser) {
      cognitoUser.signOut();
      dispatch({
        type: 'LOGOUT',
      });
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'cognito',
      login,
      register,
      logout,
    }),
    [state.isAuthenticated, state.isInitialized, state.user, login, register, logout]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
