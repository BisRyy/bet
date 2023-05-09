import { random, sample } from 'lodash';
// config
import { HOST_API } from '../../config';
// utils
import _mock from '.';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Nike Air Force 1 NDESTRUKT',
  'Foundations Matte Flip Flop',
  'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
  'Arizona Soft Footbed Sandal',
  'Boston Soft Footbed Sandal',
  'Zoom Freak 2',
  'Gazelle Vintage low-top sneakers',
  'Jordan Delta',
  'Air Jordan XXXV PF',
  'Rod Laver low-top sneakers',
  'Kyrie 7 EP Sisterhood',
  'Pharrell Williams Human Race NMD sneakers',
  'Nike Blazer Low 77 Vintage',
  'ASMC Winter Boot Cold.Rdy',
  'ZX 8000 Lego sneakers',
  'Ultraboost 21 sneakers',
  '2750 Cotu Classic Sneaker',
  'ZX 9000 A-ZX Series sneakers',
  'Madrid Big Buckle Sandal',
  'Chuck 70 Hi Sneaker',
  'Relaxed Adjustable Strap Slingback Sandal',
  'Superturf Adventure X Atmos',
  'Chuck Taylor All Star Lift Sneaker',
  'Run Star Hike Platform Sneaker',
];

const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];
const PRODUCT_TAGS = ['Dangal', 'The Sting', '2001: A Space Odyssey', "Singin' in the Rain"];

const PRODUCT_DESCRIPTION = `
<p><strong><small> SPECIFICATION</small></strong></p>
<p>Leather panels. Laces. Rounded toe. Rubber sole.
<br /><br />
<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>
<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>
`;

const PRODUCT_SIZE = ['6', '7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'];

// ----------------------------------------------------------------------

export const products = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  cover: _mock.image.product(index),
  images: [...Array(8)].map((_, index) => _mock.image.product(index)),
  name: PRODUCT_NAME[index],
  code: `38BEE27${index}`,
  sku: `WW75K521${index}YW/SV`,
  tags: PRODUCT_TAGS,
  price: _mock.number.price(index),
  priceSale: index % 3 ? null : _mock.number.price(index),
  totalRating: _mock.number.rating(index),
  totalReview: random(9999),
  ratings: [...Array(5)].map((_, index) => ({
    name: `${index + 1} Star`,
    starCount: random(9999),
    reviewCount: random(9999),
  })),
  reviews: [...Array(8)].map((_, index) => ({
    id: _mock.id(index),
    name: _mock.name.fullName(index),
    avatarUrl: `${HOST_API}/assets/images/avatars/avatar_${index + 1}.jpg`,
    comment: _mock.text.sentence(index),
    rating: _mock.number.rating(index),
    isPurchased: _mock.boolean(index),
    helpful: random(9999),
    postedAt: _mock.time(index),
  })),
  status: index % 3 ? sample(['new', '', '', '', '', '']) : 'sale',
  inventoryType: sample(['in_stock', 'out_of_stock', 'low_stock']),
  sizes: PRODUCT_SIZE,
  available: index % 3 === 0 ? random(19, 100) : 2,
  description: PRODUCT_DESCRIPTION,
  sold: random(999),
  createdAt: _mock.time(index),
  category: sample(['Shose', 'Apparel', 'Accessories']),
  gender: sample(['Men', 'Women', 'Kids']),
  colors:
    (index === 0 && PRODUCT_COLOR.slice(0, 2)) ||
    (index === 1 && PRODUCT_COLOR.slice(1, 3)) ||
    (index === 2 && PRODUCT_COLOR.slice(2, 4)) ||
    (index === 3 && PRODUCT_COLOR.slice(3, 6)) ||
    //
    (index === 4 && PRODUCT_COLOR.slice(4, 6)) ||
    (index === 5 && PRODUCT_COLOR.slice(5, 6)) ||
    (index === 6 && PRODUCT_COLOR.slice(0, 2)) ||
    (index === 7 && PRODUCT_COLOR.slice(4, 6)) ||
    //
    (index === 8 && PRODUCT_COLOR.slice(2, 4)) ||
    (index === 9 && PRODUCT_COLOR.slice(2, 6)) ||
    (index === 10 && PRODUCT_COLOR.slice(3, 6)) ||
    (index === 11 && PRODUCT_COLOR.slice(2, 6)) ||
    //
    (index === 12 && PRODUCT_COLOR.slice(2, 7)) ||
    (index === 13 && PRODUCT_COLOR.slice(4, 7)) ||
    (index === 14 && PRODUCT_COLOR.slice(0, 2)) ||
    (index === 15 && PRODUCT_COLOR.slice(5, 8)) ||
    //
    (index === 16 && PRODUCT_COLOR.slice(4, 6)) ||
    (index === 17 && PRODUCT_COLOR.slice(5, 6)) ||
    (index === 18 && PRODUCT_COLOR.slice(0, 2)) ||
    (index === 19 && PRODUCT_COLOR.slice(4, 6)) ||
    //
    (index === 20 && PRODUCT_COLOR.slice(4, 6)) ||
    (index === 21 && PRODUCT_COLOR.slice(5, 6)) ||
    (index === 22 && PRODUCT_COLOR.slice(5, 8)) ||
    (index === 23 && PRODUCT_COLOR.slice(4, 6)) ||
    PRODUCT_COLOR.slice(2, 6),
}));
