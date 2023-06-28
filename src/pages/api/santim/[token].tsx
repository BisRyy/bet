import { sign } from 'jsonwebtoken';
// next
import { NextApiRequest, NextApiResponse } from 'next';
//
import { v4 as uuidv4 } from 'uuid';
// utils
// import cors from '../../../utils/cors';
// _mock
import { users, JWT_SECRET, JWT_EXPIRES_IN } from '../../../_mock/_account';
import Test from '../../../models/test';
import connectMongo from '../../../lib/dbConnect';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // await cors(req, res);
    await connectMongo();


    const user = {
      name: req.body,
    };

    const newuser = await Test.create(user);

    // const accessToken = sign({ userId: user.id }, JWT_SECRET, {
    //   expiresIn: JWT_EXPIRES_IN,
    // });

    return res.status(200).json({ user: newuser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
