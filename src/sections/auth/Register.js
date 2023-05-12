// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthWithSocial from './AuthWithSocial';
import AuthRegisterForm from './AuthRegisterForm';
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

export default function Register() {
  const { translate:t } = useLocales();
  return (
    <LoginLayout title={t('auth.register.main_title')} illustration="/assets/images/eotc.png">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">
          {t('auth.register.title')}
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2"> 
            {t('auth.register.subtitle')}
          </Typography>

          <Link component={NextLink} href={PATH_AUTH.login} variant="subtitle2">
            {t('auth.register.subtitle2')}
          </Link>
        </Stack>
      </Stack>

      <AuthRegisterForm />

      <Typography
        component="div"
        sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}
      >
        {' '} {t('auth.register.subtitle3')} {' '}
        <Link underline="always" color="text.primary">
         {t('auth.register.subtitle4')}
        </Link>
        {' '} {t('auth.register.subtitle5')} {' '}
        <Link underline="always" color="text.primary">
          {t('auth.register.subtitle6')}
        </Link>
        .
      </Typography>

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
