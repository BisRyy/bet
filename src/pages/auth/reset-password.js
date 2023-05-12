// next
import Head from 'next/head';
import NextLink from 'next/link';
// @mui
import { Link, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// layouts
import CompactLayout from '../../layouts/compact';
// components
import Iconify from '../../components/iconify';
// sections
import AuthResetPasswordForm from '../../sections/auth/AuthResetPasswordForm';
// assets
import { PasswordIcon } from '../../assets/icons';
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

ResetPasswordPage.getLayout = (page) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function ResetPasswordPage() {
  const { translate } = useLocales();
  return (
    <>
      <Head>
        <title> {translate('auth.reset_password.title')} |  {translate("beteliq")}</title>
      </Head>

      <PasswordIcon sx={{ mb: 5, height: 96 }} />

      <Typography variant="h3" paragraph>
        {translate('auth.reset_password.main_title')}
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 5 }}>
        {translate('auth.reset_password.subtitle')}
      </Typography>

      <AuthResetPasswordForm />

      <Link
        component={NextLink}
        href={PATH_AUTH.login}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="eva:chevron-left-fill" width={16} />
        Return to sign in
      </Link>
    </>
  );
}
