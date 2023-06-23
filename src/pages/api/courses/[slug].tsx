// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import connectMongo from '../../../lib/dbConnect';
import Course from '../../../models/course';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();
  const course = await Course.findOne({ slug: req.query.slug })
    .populate('instructor', '_id name')
    .exec();
  res.json(course);
}

