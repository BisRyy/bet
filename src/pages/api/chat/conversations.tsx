// next
import { NextApiRequest, NextApiResponse } from 'next';
// import cors from '../../../utils/cors';
// _mock
import { conversations } from '../../../_mock/_chat';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await cors(req, res);
  res.status(200).json({ conversations });
}
