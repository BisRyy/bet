import { sign } from 'jsonwebtoken';
// next
import { NextApiRequest, NextApiResponse } from 'next';
//
import { v4 as uuidv4 } from 'uuid';
// utils
// import cors from '../../../utils/cors';
// _mock
import { users as newUsers, JWT_SECRET, JWT_EXPIRES_IN } from '../../../_mock/_account';
import User from '../../../models/user';
import connectMongo from '../../../lib/dbConnect';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // await cors(req, res);

    const { email = '', password, firstName, lastName } = req.body;

    await connectMongo();
    const users = await User.find({});

    newUsers.forEach((user) => {
      users.push(user);
    });

    const existUser = users.find((_user) => _user.email === email);

    if (existUser) {
      return res.status(400).json({
        message: 'There already exists an account with the given email address.',
      });
    }

    const user = {
      displayName: `${firstName} ${lastName}`,
      email,
      password,
      role: 'user',
    };

    const newuser = await User.create(user);

    const accessToken = sign({ userId: newuser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res.status(200).json({ accessToken, user: newuser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
