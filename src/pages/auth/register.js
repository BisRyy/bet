// next
import Head from 'next/head';
// auth
import GuestGuard from '../../auth/GuestGuard';
// sections
import Register from '../../sections/auth/Register';
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  const { translate:t } = useLocales();
  return (
    <>
      <Head>
        <title> {t('auth.register')} |  {t("beteliq")}</title>
      </Head>

      <GuestGuard>
        <Register />
      </GuestGuard>
    </>
  );
}
