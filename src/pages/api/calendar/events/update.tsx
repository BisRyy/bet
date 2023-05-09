// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
//
import { events, copyEvents, updateEvents } from './';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { eventId, event: updateEvent } = req.body;

    const clonedEv = copyEvents();

    const event = events.find((_event) => _event.id === eventId);

    if (!event) {
      return [404, 'Event not found'];
    }

    Object.assign(event, updateEvent);

    updateEvents(clonedEv);

    res.status(200).json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
