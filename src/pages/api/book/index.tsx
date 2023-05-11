// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
import Book from '../../../models/book';
import { books } from 'src/_mock/_book';
import connectMongo from '../../../lib/dbConnect';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);
  await connectMongo();
  const posts = await Book.find({});
  res.status(200).json({ posts });
}
