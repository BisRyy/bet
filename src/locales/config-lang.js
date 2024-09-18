// @mui
import { enUS, frFR, zhCN, viVN, arSA, amET } from '@mui/material/locale';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'Amharic',
    value: 'am',
    systemValue: amET,
    icon: '/assets/icons/flags/ethiopia.svg',
  },
  {
    label: 'Afaan Oromo',
    value: 'ao',
    icon: '/assets/icons/flags/ethiopia.svg',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  // {
  //   label: 'French',
  //   value: 'fr',
  //   systemValue: frFR,
  //   icon: '/assets/icons/flags/ic_flag_fr.svg',
  // },
  // {
  //   label: 'Vietnamese',
  //   value: 'vi',
  //   systemValue: viVN,
  //   icon: '/assets/icons/flags/ic_flag_vn.svg',
  // },
  // {
  //   label: 'Chinese',
  //   value: 'cn',
  //   systemValue: zhCN,
  //   icon: '/assets/icons/flags/ic_flag_cn.svg',
  // },
  // {
  //   label: 'Arabic',
  //   value: 'ar',
  //   systemValue: arSA,
  //   icon: '/assets/icons/flags/ic_flag_sa.svg',
  // },
];

export const defaultLang = allLangs[2]; // English
