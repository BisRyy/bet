// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from '../../../utils/cors';
import connectMongo from '../../../lib/dbConnect';
import User from '../../../models/user';
import { users } from '../../../_mock/_account';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await cors(req, res);
  await connectMongo();
  const newUsers = await User.find({});
  newUsers.reverse();
  users.forEach((post) => {
    newUsers.push(post);
  });
  res.status(200).json({ users: newUsers });
}
