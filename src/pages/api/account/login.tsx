import { sign } from 'jsonwebtoken';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { users, JWT_SECRET, JWT_EXPIRES_IN } from 'src/_mock/_account';
import connectMongo from '../../../lib/dbConnect';
import User from '../../../models/user';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { email, password } = req.body;

    await connectMongo();
    const newUsers = await User.find({});

    newUsers.forEach((user) => {
      users.push(user);
    });

    const user = users.find((_user) => _user.email === email);

    if (!user) {
      return res.status(400).json({
        message: 'There is no user corresponding to the email address.',
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: 'Wrong password',
      });
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({
      accessToken,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
