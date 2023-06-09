import { paramCase } from 'change-case';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
// import cors from '../../../utils/cors';
import connectMongo from '../../../lib/dbConnect';
import Blog from '../../../models/blog'

// _mock
// import { posts } from '../../../../_mock/_blog';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // await cors(req, res);
    await connectMongo();
    const posts = await Blog.find({});

    const { title } = req.query;

    const recentPosts = posts.filter((_post) => paramCase(_post.title) !== title);

    if (!recentPosts) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }
    res.status(200).json({ recentPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
