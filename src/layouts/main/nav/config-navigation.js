// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../../routes/paths';
// config
import { PATH_AFTER_LOGIN } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  {
    title: 'Courses',
    icon: <Iconify icon="ic:round-grain" />,
    path: PATH_PAGE.courses,
  },
  {
    title: 'Books',
    path: PATH_PAGE.books,
    icon: <Iconify icon="eva:file-fill" />,
  },
  {
    title: 'Blogs',
    icon: <Iconify icon="eva:book-open-fill" />,
    path: PATH_PAGE.blogs,
  },
];

export default navConfig;
