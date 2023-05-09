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

    const { columnId } = req.body;

    const column = board.columns.find((c) => c.id === columnId);

    if (column) {
      board.cards = board.cards.filter((card) => !column.cardIds.includes(card.id));
    }

    board.columns = board.columns.filter(({ id }) => id !== `${columnId}`);

    board.columnOrder = board.columnOrder.filter((id) => id !== columnId);

    return res.status(200).json({ columnId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
