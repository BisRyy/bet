// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import {
  findConversationById,
  findContactByUsername,
  findConversationByOtherParticipantId,
} from 'src/_mock/_chat';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { conversationKey } = req.query;
    let conversation = findConversationById(`${conversationKey}`);

    if (conversation) {
      return res.status(200).json({ conversation });
    }

    const contact = findContactByUsername(`${conversationKey}`);

    if (!contact) {
      return res.status(404).json({
        message: 'Unable to find the contact',
      });
    }
    conversation = findConversationByOtherParticipantId(contact.id);

    return res.status(200).json({ conversation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
