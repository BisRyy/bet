// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
// import cors from '../../../utils/cors';
// _mock
import { labels } from '../../../_mock/_mail';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await cors(req, res);

  res.status(200).json({ labels });
}
