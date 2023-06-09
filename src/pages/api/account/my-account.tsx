import { verify } from 'jsonwebtoken';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
// import cors from '../../../utils/cors';
// _mock
import { users, JWT_SECRET } from '../../../_mock/_account';
import connectMongo from '../../../lib/dbConnect';
import User from '../../../models/user';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // await cors(req, res);

    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: 'Authorization token missing',
      });
    }

    const accessToken = `${authorization}`.split(' ')[1];

    const data = verify(accessToken, JWT_SECRET);

    const userId = typeof data === 'object' ? data?.userId : '';

    await connectMongo();
    const newUsers = await User.find({});

    newUsers.forEach((user) => {
      users.push(user);
    });

    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return res.status(401).json({
        message: 'Invalid authorization token',
      });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
