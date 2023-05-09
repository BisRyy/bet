import { memo, useEffect } from 'react';
import NProgress from 'nprogress';
// next
import { useRouter } from 'next/router';
//
import StyledProgressBar from './styles';

// ----------------------------------------------------------------------

function ProgressBar() {
  const router = useRouter();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    let timeout;

    const handleStart = () => {
      timeout = setTimeout(() => NProgress.start(), 300);
    };

    const handleStop = () => {
      NProgress.done();
      clearTimeout(timeout);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <StyledProgressBar />;
}

export default memo(ProgressBar);
