import { sample } from 'lodash';
// _mock
import _mock from '.';
import { _files } from './_files';

// ----------------------------------------------------------------------

const createLabelIds = (index: number) => {
  if (index === 1) {
    return ['id_promotions', 'id_forums'];
  }
  if (index === 2) {
    return ['id_forums'];
  }
  if (index === 5) {
    return ['id_social'];
  }
  return [];
};

const createAttachment = (index: number) => {
  if (index === 1) {
    return _files.slice(0, 2);
  }
  if (index === 2) {
    return _files.slice(0, 4);
  }
  if (index === 5) {
    return _files.slice(4, 10);
  }
  return [];
};

const FOLDER = ['promotions', 'spam', 'inbox', 'folder'];

// ----------------------------------------------------------------------

export const labels = [
  { id: 'all', type: 'system', name: 'all mail', unreadCount: 3 },
  { id: 'inbox', type: 'system', name: 'inbox', unreadCount: 1 },
  { id: 'sent', type: 'system', name: 'sent', unreadCount: 0 },
  { id: 'drafts', type: 'system', name: 'drafts', unreadCount: 0 },
  { id: 'trash', type: 'system', name: 'trash', unreadCount: 0 },
  { id: 'spam', type: 'system', name: 'spam', unreadCount: 1 },
  { id: 'important', type: 'system', name: 'important', unreadCount: 1 },
  { id: 'starred', type: 'system', name: 'starred', unreadCount: 1 },
  {
    id: 'id_social',
    type: 'custom',
    name: 'social',
    unreadCount: 0,
    color: '#00AB55',
  },
  {
    id: 'id_promotions',
    type: 'custom',
    name: 'promotions',
    unreadCount: 2,
    color: '#FFC107',
  },
  {
    id: 'id_forums',
    type: 'custom',
    name: 'forums',
    unreadCount: 1,
    color: '#FF4842',
  },
];

export const mails = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  labelIds: createLabelIds(index + 1),
  folder: sample(FOLDER),
  isImportant: _mock.boolean(index),
  isStarred: _mock.boolean(index),
  isUnread: _mock.boolean(index),
  subject: _mock.text.title(index),
  message: _mock.text.sentence(index),
  createdAt: _mock.time(index),
  attachments: createAttachment(index),
  from: {
    name: _mock.name.fullName(index),
    email: _mock.email(index),
    avatar:
      index === 1 || index === 2 || index === 5 || index === 6 || index === 8
        ? null
        : _mock.image.avatar(index),
  },
  to: [
    {
      name: 'Jaydon Frankie',
      email: 'demo@minimals.cc',
      avatar: null,
    },
  ],
}));

// ----------------------------------------------------------------------

export const filterMails = (systemLabel: string, customLabel: string | undefined) => {
  if (customLabel) {
    const label = labels.find((_label) => _label.name === customLabel);
    if (!label) {
      return [];
    }
    return mails.filter((mail) => mail.labelIds.includes(label.id));
  }

  if (systemLabel === 'all') {
    return mails;
  }

  if (['starred', 'important'].includes(systemLabel)) {
    if (systemLabel === 'starred') {
      return mails.filter((mail) => mail.isStarred);
    }
    if (systemLabel === 'important') {
      return mails.filter((mail) => mail.isImportant);
    }
  }

  if (['inbox', 'sent', 'drafts', 'trash', 'spam', 'starred'].includes(systemLabel)) {
    return mails.filter((mail) => mail.folder === systemLabel);
  }

  return [];
};
