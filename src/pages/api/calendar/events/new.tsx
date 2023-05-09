import { v4 as uuidv4 } from 'uuid';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { title, description, textColor, allDay, end, start } = req.body;
    const event = {
      id: uuidv4(),
      title,
      description,
      textColor,
      allDay,
      end,
      start,
    };
    // events = [...events, event];
    res.status(200).json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
