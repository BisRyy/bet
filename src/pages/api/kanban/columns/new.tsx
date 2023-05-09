import { v4 as uuidv4 } from 'uuid';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { board } from 'src/_mock/_kanban';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { name } = req.body;

    const column = {
      id: uuidv4(),
      name,
      cardIds: [],
    };

    board.columns.push(column);

    board.columnOrder.push(column.id);

    return res.status(200).json({ column });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
