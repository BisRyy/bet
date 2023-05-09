// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { products } from 'src/_mock/_products';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { query } = req.query;

    const cleanQuery = `${query}`.toLowerCase().trim();

    const results: typeof products = [];

    products.forEach((product) => {
      if (!query) {
        return results.push(product);
      }

      if (product.name.toLowerCase().includes(cleanQuery)) {
        return results.push(product);
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
