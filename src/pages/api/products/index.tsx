// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
// import cors from '../../../utils/cors';
// _mock
import { products } from '../../../_mock/_products';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await cors(req, res);

  res.status(200).json({ products });
}
