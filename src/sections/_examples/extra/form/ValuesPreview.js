// form
import { useFormContext } from 'react-hook-form';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Portal, Divider } from '@mui/material';
// utils
import { bgBlur } from '../../../../utils/cssStyles';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import { fileData } from '../../../../components/file-thumbnail';

// ----------------------------------------------------------------------

export default function ValuesPreview() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  if (!isDesktop) {
    return null;
  }

  return (
    <Portal>
      <Stack
        sx={{
          p: 3,
          top: 0,
          right: 0,
          height: 1,
          width: 280,
          position: 'fixed',
          overflowX: 'auto',
          color: 'common.white',
          zIndex: theme.zIndex.drawer,
          ...bgBlur({ color: theme.palette.grey[900] }),
        }}
      >
        <Typography variant="overline" sx={{ mb: 2, color: 'success.light' }}>
          Values
        </Typography>

        {Object.keys(values).map((value) => (
          <Stack key={value} sx={{ typography: 'caption', mt: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'warning.main' }}>
              {value} :
            </Typography>

            {parseValue(values, value)}
          </Stack>
        ))}

        <Divider sx={{ my: 2 }} />

        <Typography variant="overline" sx={{ mb: 2, color: 'error.light' }}>
          Errors
        </Typography>

        <Typography variant="caption" sx={{ color: 'error.light' }}>
          {JSON.stringify(Object.keys(errors), null, 2)}
        </Typography>
      </Stack>
    </Portal>
  );
}

// ----------------------------------------------------------------------

function parseValue(values, value) {
  if (value === 'singleUpload') {
    return JSON.stringify(values.singleUpload && fileData(values.singleUpload));
  }
  if (value === 'multiUpload') {
    return JSON.stringify(values.multiUpload.map((file) => fileData(file)));
  }
  return JSON.stringify(values[value]) || '---';
}
