// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon('ic_blog'),
  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const newConfig = [
  {
    subheader: 'pages',
    items: [
      {
        title: 'dashboard',
        path: PATH_DASHBOARD.app,
        icon: ICONS.dashboard,
      },
      {
        title: 'blog',
        path: PATH_DASHBOARD.blog.posts,
        icon: ICONS.blog,
      },
      {
        title: 'courses',
        path: PATH_DASHBOARD.courses.root,
        icon: ICONS.file,
      },
      {
        title: 'books',
        path: PATH_DASHBOARD.books.root,
        icon: ICONS.folder,
      },
      {
        title: 'ecommerce',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        roles: ['admin'],
      },
      {
        title: 'calendar',
        path: PATH_DASHBOARD.calendar,
        icon: ICONS.calendar,
        roles: ['admin'],
      },
      {
        title: 'chat',
        path: PATH_DASHBOARD.chat.root,
        icon: ICONS.chat,
        caption: 'This feature is under development',
        roles: ['admin'],
      },
      {
        title: 'admin',
        icon: ICONS.lock,
        roles: ['admin'],
        path: PATH_DASHBOARD.user.list,
        children: [
          {
            title: 'users',
            path: PATH_DASHBOARD.user.list,
          },
          {
            title: 'products',
            path: PATH_DASHBOARD.eCommerce.list,
          },
          {
            title: 'sells',
            path: PATH_DASHBOARD.general.ecommerce,
          },
          {
            title: 'analytics',
            path: PATH_DASHBOARD.general.analytics,
            caption: 'Data Provided might be inaccurate',
          },
        ],
      },
    ],
  },
];

export default newConfig;
