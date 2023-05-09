import { sign } from 'jsonwebtoken';
// next
import { NextApiRequest, NextApiResponse } from 'next';
//
import { v4 as uuidv4 } from 'uuid';
// utils
import cors from 'src/utils/cors';
// _mock
import { users, JWT_SECRET, JWT_EXPIRES_IN } from 'src/_mock/_account';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { email = '', password, firstName, lastName } = req.body;

    const existUser = users.find((_user) => _user.email === email);

    if (existUser) {
      return res.status(400).json({
        message: 'There already exists an account with the given email address.',
      });
    }

    const user = {
      id: uuidv4(),
      displayName: `${firstName} ${lastName}`,
      email,
      password,
      photoURL: null,
      phoneNumber: null,
      country: null,
      address: null,
      state: null,
      city: null,
      zipCode: null,
      about: null,
      role: 'user',
      isPublic: true,
    };

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res.status(200).json({ accessToken, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
