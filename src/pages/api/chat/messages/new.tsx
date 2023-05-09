import { v4 as uuidv4 } from 'uuid';
import { sub } from 'date-fns';
// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import {
  contacts,
  MY_CONTACT,
  findConversationById,
  findConversationByParticipantIds,
} from 'src/_mock/_chat';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { conversationId, recipientIds = [], body } = req.body;

    const user = MY_CONTACT;
    let conversation = null;

    if (conversationId) {
      conversation = findConversationById(`${conversationId}`);
      if (!conversation) {
        return res.status(400).json({
          message: 'Invalid conversation id',
        });
      }
    }

    if (recipientIds) {
      const participantIds = [...`${recipientIds}`.split(','), user.id];
      conversation = findConversationByParticipantIds(participantIds);
    }

    const message = {
      id: uuidv4(),
      attachments: [],
      body: `${body}`,
      contentType: 'text',
      createdAt: sub(new Date(), { minutes: 1 }),
      senderId: user.id,
    };

    if (conversation) {
      conversation.messages = [...conversation.messages, message];
    } else {
      const participants = [user];

      `${recipientIds}`.split(',').forEach((recipientId) => {
        const contact = contacts.find((_contact) => _contact.id === recipientId);

        if (!contact) {
          throw new Error('Contact not found');
        }

        participants.push({
          id: contact.id,
          avatar: contact.avatar,
          name: contact.name,
          username: contact.username,
        });
      });

      conversation = {
        id: uuidv4(),
        messages: [message],
        participants,
        type: participants.length === 2 ? 'ONE_TO_ONE' : 'GROUP',
        unreadCount: 0,
      };
    }

    const responseData = {
      conversationId: conversation.id,
      message,
    };

    return res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
