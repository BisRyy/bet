// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from '../../../../utils/cors';
import connectMongo from '../../../../lib/dbConnect';
import Blog from '../../../../models/blog'
import { posts } from '../../../../_mock/_blog';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await cors(req, res);
  await connectMongo();
  const newPosts = await Blog.find({});
  newPosts.reverse();
  posts.forEach((post) => {
    newPosts.push(post);
  });
  res.status(200).json({ posts: newPosts });
}
