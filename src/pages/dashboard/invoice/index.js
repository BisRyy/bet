import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (pathname === PATH_DASHBOARD.invoice.root) {
      push(PATH_DASHBOARD.invoice.list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
