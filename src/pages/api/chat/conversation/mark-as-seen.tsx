// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { conversations } from 'src/_mock/_chat';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { conversationId } = req.query;

    const conversation = conversations.find((_conversation) => _conversation.id === conversationId);

    if (conversation) {
      conversation.unreadCount = 0;
    }

    return res.status(200).json({ status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
