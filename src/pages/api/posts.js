import connectMongo from '../../lib/dbConnect';
import Blog from '../../models/blog';
// import { posts } from '../../_mock/_blog.ts';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('CONNECTING TO MONGO');

      await connectMongo();

      console.log('CONNECTED TO MONGO');

      console.log('CREATING DOCUMENT');

      const blog = await Blog.create(req.body);

      console.log('CREATED BLOG');

      return res.json({ blog });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  } else if (req.method === 'GET') {
    await connectMongo();
    const posts = await Blog.find({}).where('publish').equals(true).sort({ createdAt: -1 });

    return res.status(200).json({ posts });
  }
  return res.status(405).end(); // Method Not Allowed
}
