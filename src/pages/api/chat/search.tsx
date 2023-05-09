// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { contacts } from 'src/_mock/_chat';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { query } = req.query;
    let results = contacts;
    if (query) {
      const cleanQuery = `${query}`.toLowerCase().trim();

      results = results.filter((contact) => contact.name.toLowerCase().includes(cleanQuery));
    }
    res.status(200).json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
