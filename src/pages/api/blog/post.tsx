import { paramCase } from 'change-case';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
// import cors from '../../../utils/cors';
import connectMongo from '../../../lib/dbConnect';
import Blog from '../../../models/blog'

// _mock
import { posts } from '../../../_mock/_blog';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    try {
      // await cors(req, res);
      await connectMongo();
      const newPosts = await Blog.find({});
      newPosts.reverse();
      posts.forEach((post) => {
        newPosts.push(post);
      });
      const { title } = req.query;

      const post = newPosts.find((_post) => paramCase(_post.title) === title);

      if (!post) {
        return res.status(404).json({
          message: 'Post not found!',
        });
      }

      res.status(200).json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
      });
    }
  } else if (req.method == 'DELETE'){
    const { id } = req.query;
    try {
      // await cors(req, res);
      await connectMongo();
      const post = await Blog.findByIdAndDelete(id);
      res.status(200).json({ post });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}
