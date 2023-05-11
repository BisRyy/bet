// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
import connectMongo from '../../../../lib/dbConnect';
import Blog from '../../../../models/blog'

// _mock
// import { posts } from 'src/_mock/_blog';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);
    await connectMongo();
    const posts = await Blog.find({});

    const { query } = req.query;

    const cleanQuery = `${query}`.toLowerCase().trim();

    const results: typeof posts = [];

    posts.forEach((post) => {
      if (!query) {
        return results.push(post);
      }

      if (post.title.toLowerCase().includes(cleanQuery)) {
        return results.push(post);
      }
    });

    res.status(200).json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
