// config
import { HOST_API } from '../../config';

// ----------------------------------------------------------------------

export const JWT_SECRET = 'minimal-secret-key';

export const JWT_EXPIRES_IN = '3 days';

export const users = [
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Beteliq Admin',
    email: 'dev@bisrat.tech',
    password: 'dev@bisrat.tech',
    photoURL: `${HOST_API}/assets/images/avatars/avatar_default.jpg`,
    phoneNumber: '++251 911 111 111',
    country: 'Ethiopia',
    address: 'Addis Ababa',
    state: 'Addis Ababa',
    city: 'Addis Ababa',
    zipCode: '1000',
    about: 'God is Good',
    role: 'superadmin',
    isPublic: true,
  },
];
