import { sub } from 'date-fns';
//
import { role } from './assets/role';
import { email } from './assets/email';
import { boolean } from './assets/boolean';
import { company } from './assets/company';
import { phoneNumber } from './assets/phoneNumber';
import { fullAddress, country } from './assets/address';
import { firstName, lastName, fullName } from './assets/name';
import { title, sentence, description } from './assets/text';
import { price, rating, age, percent } from './assets/number';
import { HOST_API } from '../../config';

// ----------------------------------------------------------------------

const _mock = {
  id: (index: number) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index: number) => email[index],
  phoneNumber: (index: number) => phoneNumber[index],
  time: (index: number) => sub(new Date(), { days: index, hours: index }),
  boolean: (index: number) => boolean[index],
  role: (index: number) => role[index],
  company: (index: number) => company[index],
  address: {
    fullAddress: (index: number) => fullAddress[index],
    country: (index: number) => country[index],
  },
  name: {
    firstName: (index: number) => firstName[index],
    lastName: (index: number) => lastName[index],
    fullName: (index: number) => fullName[index],
  },
  text: {
    title: (index: number) => title[index],
    sentence: (index: number) => sentence[index],
    description: (index: number) => description[index],
  },
  number: {
    percent: (index: number) => percent[index],
    rating: (index: number) => rating[index],
    age: (index: number) => age[index],
    price: (index: number) => price[index],
  },
  image: {
    cover: (index: number) => `${HOST_API}/assets/images/covers/cover_${index + 1}.jpg`,
    product: (index: number) => `${HOST_API}/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index: number) => `${HOST_API}/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
};

export default _mock;
