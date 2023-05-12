// next
import Head from 'next/head';
import NextLink from 'next/link';
// @mui
import { Link, Typography } from '@mui/material';
// layouts
import CompactLayout from '../../layouts/compact';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Iconify from '../../components/iconify';
// sections
import AuthNewPasswordForm from '../../sections/auth/AuthNewPasswordForm';
// assets
import { SentIcon } from '../../assets/icons';
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

NewPasswordPage.getLayout = (page) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function NewPasswordPage() {
  const { translate:t } = useLocales();
  return (
    <>
      <Head>
        <title> New Password | Minimal UI</title>
      </Head>

      <SentIcon sx={{ mb: 5, height: 96 }} />

      <Typography variant="h3" paragraph>
        {t('auth.new_password.main_title')}
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 5 }}>
        {t('auth.new_password.subtitle')}
        <br />
        {t('auth.new_password.subtitle2')}
      </Typography>

      <AuthNewPasswordForm />

      <Typography variant="body2" sx={{ my: 3 }}>
        {t('auth.new_password.subtitle3')} &nbsp;
        <Link variant="subtitle2">
          {t('auth.new_password.subtitle4')}
        </Link>
      </Typography>

      <Link
        component={NextLink}
        href={PATH_AUTH.login}
        color="inherit"
        variant="subtitle2"
        sx={{
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="eva:chevron-left-fill" width={16} />
        {t('auth.new_password.subtitle5')}
      </Link>
    </>
  );
}
