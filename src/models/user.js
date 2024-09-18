import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  displayName: String,
  email: String,
  password: String,
  photoURL: {
    type: String,
    default: '/assets/images/avatars/avatar_default.jpg',
  },
  phoneNumber: String,
  country: {
    type: String,
    default: 'Ethiopia',
  },
  address: {
    type: String,
    default: 'Addis Ababa',
  },
  state: {
    type: String,
    default: 'Addis Ababa',
  },
  city: {
    type: String,
    default: 'Addis Ababa',
  },
  zipCode: {
    type: String,
    default: '1000',
  },
  about: String,
  role: {
    type: String,
    default: 'user',
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
});

const User = models.User || model('User', userSchema);

export default User;
