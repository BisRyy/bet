// next
import NextLink from 'next/link';
// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

export default function Login() {
const { translate } = useLocales();


  return (
    <LoginLayout title={translate('auth.login_head_title')} illustration="/assets/images/eotc.png">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">
          {`${translate('auth.login_title')}` }
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">
            {`${translate('auth.dont_have_account')}` }
          </Typography>

          <Link component={NextLink} href={PATH_AUTH.register} variant="subtitle2">
            {`${translate('auth.register.title')}` }
          </Link>
        </Stack>
      </Stack>

      {/* <Alert severity="info" sx={{ mb: 3 }}>
        Use email : <strong>dev@bisrat.tech</strong> / password :<strong> demo1234</strong> for Admin access
      </Alert> */}

      <AuthLoginForm />

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
