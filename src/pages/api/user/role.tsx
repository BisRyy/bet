import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../lib/dbConnect';
import User from '../../../models/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id, role } = req.body;
    try {
      // await cors(req, res);
      await connectMongo();
      console.log('id', id);
      console.log('role', role);

      const user = await User.findOneAndUpdate({ _id: id }, { role }, { new: true });
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
      });
    }
  }