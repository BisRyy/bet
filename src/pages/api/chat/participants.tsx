// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { findConversationById, findContactByUsername } from 'src/_mock/_chat';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { conversationKey } = req.query;

    const participants = [];

    const conversation = findConversationById(`${conversationKey}`);

    if (conversation) {
      participants.push(...conversation.participants);
    } else {
      const contact = findContactByUsername(`${conversationKey}`);
      if (contact) {
        participants.push({
          id: contact.id,
          avatar: contact.avatar,
          name: contact.name,
          username: contact.username,
          address: contact.address,
          phone: contact.phone,
          email: contact.email,
          role: contact.role,
          status: contact.status,
          lastActivity: contact.lastActivity,
        });
      }
    }
    return res.status(200).json({ participants });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
