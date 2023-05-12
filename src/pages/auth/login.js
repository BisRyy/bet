// next
import Head from 'next/head';
// auth
import GuestGuard from '../../auth/GuestGuard';
// sections
import Login from '../../sections/auth/Login';
import { useLocales } from '../../locales';
// import Login from '../../sections/auth/LoginAuth0';

// ----------------------------------------------------------------------

export default function LoginPage() {
  const { translate:t } = useLocales();
  return (
    <>
      <Head>
        <title>{t('auth.login')} | {t("beteliq")}</title>
      </Head>

      <GuestGuard>
        <Login />
      </GuestGuard>
    </>
  );
}
