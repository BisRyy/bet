import { v4 as uuidv4 } from 'uuid';
import { sub } from 'date-fns';
import { dotCase } from 'change-case';
import { sample, isEmpty, xor } from 'lodash';
// config
import { HOST_API } from '../../config';
// _mock
import _mock from './_mock';
import { _files } from './_files';

// ----------------------------------------------------------------------

export const MY_CONTACT = {
  id: '8864c717-587d-472a-929a-8e5f298024da-0',
  avatar: `${HOST_API}/assets/images/avatars/avatar_15.jpg`,
  name: 'Jaydon Frankie',
  username: 'jaydon.frankie',
};

// ----------------------------------------------------------------------

export const contacts = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  username: _mock.name.fullName(index) && dotCase(_mock.name.fullName(index)),
  avatar: _mock.image.avatar(index),
  address: _mock.address.fullAddress(index),
  phone: _mock.phoneNumber(index),
  email: _mock.email(index),
  lastActivity: _mock.time(index),
  status: sample(['online', 'offline', 'away', 'busy']) || 'online',
  role: _mock.role(index),
}));

export const conversations = [
  {
    id: _mock.id(1),
    participants: [MY_CONTACT, contacts[1]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(1),
        contentType: 'text',
        attachments: _files.slice(0, 1),
        createdAt: sub(new Date(), { hours: 10 }),
        senderId: contacts[1].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(2),
        contentType: 'text',
        attachments: _files.slice(1, 2),
        createdAt: sub(new Date(), { hours: 2 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(3),
        contentType: 'text',
        attachments: _files.slice(2, 3),
        createdAt: sub(new Date(), { minutes: 8 }),
        senderId: contacts[1].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(4),
        contentType: 'text',
        attachments: _files.slice(3, 6),
        createdAt: sub(new Date(), { minutes: 6 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(5),
        contentType: 'text',
        attachments: _files.slice(6, 10),
        createdAt: sub(new Date(), { minutes: 4 }),
        senderId: contacts[1].id,
      },
      {
        id: uuidv4(),
        attachments: [],
        contentType: 'image',
        body: _mock.image.cover(4),
        createdAt: sub(new Date(), { minutes: 2 }),
        senderId: contacts[1].id,
      },
      {
        id: uuidv4(),
        contentType: 'text',
        attachments: [],
        body: _mock.text.sentence(6),
        createdAt: sub(new Date(), { minutes: 2 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 2 }),
        senderId: MY_CONTACT.id,
      },
    ],
  },
  {
    id: _mock.id(2),
    participants: [MY_CONTACT, contacts[2]],
    type: 'ONE_TO_ONE',
    unreadCount: 2,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(8),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 8 }),
        senderId: contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(9),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 6 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(10),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 4, minutes: 30 }),
        senderId: contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(11),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 2, minutes: 15 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(12),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1, minutes: 15 }),
        senderId: contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.image.cover(7),
        attachments: [],
        contentType: 'image',
        createdAt: sub(new Date(), { hours: 1 }),
        senderId: contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(13),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 45 }),
        senderId: MY_CONTACT.id,
      },
    ],
  },
  {
    id: _mock.id(3),
    participants: [MY_CONTACT, contacts[3]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(14),
        contentType: 'text',
        attachments: _files.slice(0, 1),
        createdAt: sub(new Date(), { hours: 8 }),
        senderId: contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(15),
        contentType: 'text',
        attachments: _files.slice(1, 2),
        createdAt: sub(new Date(), { hours: 6 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(16),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 4, minutes: 30 }),
        senderId: contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(17),
        contentType: 'text',
        attachments: _files.slice(2, 4),
        createdAt: sub(new Date(), { hours: 2, minutes: 15 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(18),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1, minutes: 15 }),
        senderId: contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.image.cover(5),
        contentType: 'image',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1 }),
        senderId: contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.image.cover(6),
        contentType: 'image',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1 }),
        senderId: contacts[3].id,
      },
    ],
  },
  {
    id: _mock.id(4),
    participants: [MY_CONTACT, contacts[4]],
    type: 'ONE_TO_ONE',
    unreadCount: 2,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(19),
        contentType: 'text',
        attachments: _files.slice(2, 4),
        createdAt: sub(new Date(), { hours: 10 }),
        senderId: contacts[4].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(20),
        contentType: 'text',
        attachments: _files.slice(4, 6),
        createdAt: sub(new Date(), { hours: 2 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(21),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 5 }),
        senderId: contacts[4].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(22),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 3 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(23),
        contentType: 'text',
        attachments: _files.slice(6, 10),
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(24),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: contacts[4].id,
      },
    ],
  },
  {
    id: _mock.id(5),
    participants: [MY_CONTACT, contacts[5]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(25),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(26),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: contacts[5].id,
      },
    ],
  },
  {
    id: _mock.id(6),
    participants: [MY_CONTACT, contacts[6]],
    type: 'ONE_TO_ONE',
    unreadCount: 2,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(27),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(28),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: contacts[6].id,
      },
    ],
  },
  {
    id: _mock.id(7),
    participants: [MY_CONTACT, contacts[1], contacts[2], contacts[4], contacts[3]],
    type: 'GROUP',
    unreadCount: 5,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(29),
        contentType: 'text',
        attachments: _files.slice(0, 5),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 30 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(30),
        contentType: 'text',
        attachments: _files.slice(5, 6),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 29 }),
        senderId: contacts[1].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(31),
        contentType: 'text',
        attachments: _files.slice(6, 7),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 28 }),
        senderId: contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(32),
        contentType: 'text',
        attachments: _files.slice(7, 8),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 27 }),
        senderId: contacts[4].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(33),
        contentType: 'text',
        attachments: _files.slice(8, 9),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 26 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(34),
        contentType: 'text',
        attachments: _files.slice(9, 10),
        createdAt: sub(new Date(), { days: 3 }),
        senderId: contacts[3].id,
      },
    ],
  },
  {
    id: _mock.id(8),
    participants: [MY_CONTACT, contacts[7]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(35),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(1),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: contacts[7].id,
      },
    ],
  },
  {
    id: _mock.id(9),
    participants: [MY_CONTACT, contacts[8]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(2),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(3),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: contacts[8].id,
      },
    ],
  },
  {
    id: _mock.id(10),
    participants: [MY_CONTACT, contacts[9]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(4),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(5),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: contacts[9].id,
      },
    ],
  },
  {
    id: _mock.id(11),
    participants: [MY_CONTACT, contacts[6], contacts[7], contacts[8], contacts[9], contacts[10]],
    type: 'GROUP',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(6),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 30 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 29 }),
        senderId: contacts[9].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(8),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 28 }),
        senderId: contacts[10].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(9),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 27 }),
        senderId: contacts[8].id,
      },
      {
        id: uuidv4(),
        attachments: [],
        body: _mock.text.sentence(10),
        contentType: 'text',
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 26 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(11),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3 }),
        senderId: contacts[6].id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(12),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3 }),
        senderId: contacts[7].id,
      },
    ],
  },
  {
    id: _mock.id(12),
    participants: [MY_CONTACT, contacts[10]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.text.sentence(13),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.text.sentence(14),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: contacts[10].id,
      },
    ],
  },
];

// ----------------------------------------------------------------------

export const findContactByUsername = (username: string) => {
  const contact = contacts.find((_contact) => _contact.username === username);
  return contact || null;
};

export const findConversationById = (conversationId: string) => {
  const conversation = conversations.find((_conversation) => _conversation.id === conversationId);
  return conversation || null;
};

export const findConversationByOtherParticipantId = (participantId: string) => {
  const conversation = conversations.find((_conversation) => {
    if (_conversation.type !== 'ONE_TO_ONE') {
      return false;
    }
    const participant = _conversation.participants.find(
      (_participant) => _participant.id === participantId
    );
    return !!participant;
  });
  return conversation || null;
};

export const findConversationByParticipantIds = (participantIds: string[]) => {
  const conversation = conversations.find((_conversation) => {
    if (_conversation.participants.length < participantIds.length) {
      return false;
    }
    const _participantIds: string[] = [];
    _conversation.participants.forEach((_participant) => {
      _participantIds.push(_participant.id);
    });

    return isEmpty(xor(participantIds, _participantIds));
  });
  return conversation || null;
};
