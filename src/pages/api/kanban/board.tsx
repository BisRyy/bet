// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
// import cors from '../../../utils/cors';
// _mock
import { board } from '../../../_mock/_kanban';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await cors(req, res);

  return res.status(200).json({ board });
}
