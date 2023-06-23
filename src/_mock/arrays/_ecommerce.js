import _mock from '../_mock';

// ----------------------------------------------------------------------

const COUNTRY = ['de', 'en', 'fr', 'kr', 'us'];

const CATEGORY = ['Books', 'Cloth', 'Prayer', 'Cross', 'Others'];

const PRODUCT_NAME = [
  'Holy Bible',
  'Cross Necklace',
  'Candle',
  'Ethiopian Cross',
  'Prayer Book',
];

export const _ecommerceSalesOverview = [...Array(3)].map((_, index) => ({
  label: ['Total Profit', 'Total Income', 'Total Expenses'][index],
  amount: _mock.number.price(index) * 100,
  value: _mock.number.percent(index),
}));

export const _ecommerceBestSalesman = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  avatar: _mock.image.avatar(index + 8),
  category: CATEGORY[index],
  flag: `/assets/icons/flags/ic_flag_${COUNTRY[index]}.svg`,
  total: _mock.number.price(index),
  rank: `Top ${index + 1}`,
}));

export const _ecommerceLatestProducts = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: PRODUCT_NAME[index],
  image: _mock.image.product(index),
  price: _mock.number.price(index),
  priceSale: index === 0 || index === 3 ? 0 : _mock.number.price(index),
  colors: (index === 0 && ['#2EC4B6', '#E71D36', '#FF9F1C', '#011627']) ||
    (index === 1 && ['#92140C', '#FFCF99']) ||
    (index === 2 && ['#0CECDD', '#FFF338', '#FF67E7', '#C400FF', '#52006A', '#046582']) ||
    (index === 3 && ['#845EC2', '#E4007C', '#2A1A5E']) || ['#090088'],
}));

export const _ecommerceNewProducts = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: [
    'Religious T-shirt',
    'Pendant',
    'Clergy Robe',
    'Holy Water Bottle',
    'Wooden Cross',
    'Religious Wall Hanging',
    'Ethiopian Orthodox Calendar',
    'Religious Keychain',
    'Religious Tapestry',
    'Ethiopian Orthodox Cross Stitch Kit',
  ][index],
  image: _mock.image.product(index),
}));
