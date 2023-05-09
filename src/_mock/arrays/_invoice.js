import { add, subDays } from 'date-fns';
//
import _mock from '../_mock';
import { randomInArray, randomNumberRange } from '../utils';

// ----------------------------------------------------------------------

export const _invoices = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  invoiceNumber: `${17048 + index}`,
  taxes: 5,
  discount: 10,
  sent: randomNumberRange(1, 10),
  subTotalPrice: _mock.number.price(index + 1),
  totalPrice: _mock.number.price(index + 1),
  createDate: subDays(new Date(), index),
  dueDate: add(new Date(), { days: index + 15, hours: index }),
  status: randomInArray(['paid', 'unpaid', 'overdue', 'draft']),
  invoiceFrom: {
    id: _mock.id(index),
    name: _mock.name.fullName(index),
    address: _mock.address.fullAddress(index),
    company: _mock.company(index),
    email: _mock.email(index),
    phone: _mock.phoneNumber(index),
  },
  invoiceTo: {
    id: _mock.id(index + 1),
    name: _mock.name.fullName(index + 1),
    address: _mock.address.fullAddress(index + 1),
    company: _mock.company(index + 1),
    email: _mock.email(index + 1),
    phone: _mock.phoneNumber(index + 1),
  },
  items: [...Array(3)].map((__, itemIndex) => ({
    id: _mock.id(itemIndex),
    title: _mock.text.title(itemIndex),
    description: _mock.text.description(itemIndex),
    quantity: 5,
    price: _mock.number.price(itemIndex),
    total: _mock.number.price(itemIndex),
    service: randomInArray([
      'full stack development',
      'backend development',
      'ui design',
      'ui/ux design',
      'front end development',
    ]),
  })),
}));

export const _invoiceAddressFrom = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  address: _mock.address.fullAddress(index),
  company: _mock.company(index),
  email: _mock.email(index),
  phone: _mock.phoneNumber(index),
}));

export const _invoiceAddressTo = [...Array(16)].map((_, index) => ({
  id: _mock.id(index + 1),
  name: _mock.name.fullName(index + 1),
  address: _mock.address.fullAddress(index + 1),
  company: _mock.company(index + 1),
  email: _mock.email(index + 1),
  phone: _mock.phoneNumber(index + 1),
}));
