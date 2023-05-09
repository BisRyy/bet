import cors from 'src/utils/cors';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// _mock
import { board } from 'src/_mock/_kanban';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { columnId, updateColumn = {} } = req.body;

    const columnIndex = board.columns.findIndex((column) => column.id === columnId);

    board.columns[columnIndex] = {
      ...board.columns[columnIndex],
      ...updateColumn,
    };

    return res.status(200).json({
      column: board.columns[columnIndex],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
