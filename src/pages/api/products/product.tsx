import { paramCase } from 'change-case';
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

    const { name } = req.query;

    const product = products.find((_product) => paramCase(_product.name) === name);

    if (!product) {
      return res.status(404).json({
        message: 'product not found',
      });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
