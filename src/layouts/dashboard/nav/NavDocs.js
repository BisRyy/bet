// @mui
import { Stack, Button, Typography, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// locales
import { useLocales } from '../../../locales';
// routes
import { PATH_DOCS } from '../../../routes/paths';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function NavDocs() {
  const { replace, push } = useRouter();

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const { translate } = useLocales();

  const handleLogout = async () => {
    try {
      logout();
      replace(PATH_AUTH.login);
      handleClosePopover();
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  return (
    <Stack
      spacing={3}
      sx={{
        px: 5,
        pb: 5,
        mt: 10,
        width: 1,
        display: 'block',
        textAlign: 'center',
      }}
    >
      <Box component="img" src="/assets/illustrations/illustration_docs.svg" />

      <div>
        <Typography gutterBottom variant="subtitle1">
          {`${translate('auth.hi')}, ${user?.displayName}`}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
          {`${translate('auth.logoutDescription')}`}
        </Typography>
      </div>

      <Button variant="contained" onClick={handleLogout}>
        {`${translate('auth.logout')}`}
      </Button>
    </Stack>
  );
}
