// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import connectMongo from '../../../lib/dbConnect';
import Course from '../../../models/course';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();
  const courses = await Course.find({ published: true }).populate('instructor', '_id name').exec();
  res.status(200).json({ courses });
}

