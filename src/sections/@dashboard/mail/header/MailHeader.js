import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Stack,
  Tooltip,
  Checkbox,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

MailHeader.propTypes = {
  onOpenNav: PropTypes.func,
  mailsLength: PropTypes.number,
  onToggleDense: PropTypes.func,
  onSelectAllMails: PropTypes.func,
  onDeselectAllMails: PropTypes.func,
  selectedMailsLength: PropTypes.number,
};

export default function MailHeader({
  onOpenNav,
  mailsLength,
  selectedMailsLength,
  onSelectAllMails,
  onDeselectAllMails,
  onToggleDense,
  ...other
}) {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  const selectedAllMails = mailsLength > 0 && selectedMailsLength === mailsLength;

  const selectedSomeMails = selectedMailsLength > 0 && selectedMailsLength < mailsLength;

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      flexShrink={0}
      sx={{
        px: 2,
        height: 80,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
      {...other}
    >
      <Stack direction="row" alignItems="center" flexGrow={1}>
        {!mdUp && (
          <IconButton onClick={onOpenNav}>
            <Iconify icon="eva:menu-fill" />
          </IconButton>
        )}

        {smUp && (
          <>
            <Checkbox
              checked={selectedAllMails}
              indeterminate={selectedSomeMails}
              onChange={(event) =>
                event.target.checked ? onSelectAllMails() : onDeselectAllMails()
              }
            />
            <Tooltip title="Refresh">
              <IconButton>
                <Iconify icon="eva:refresh-fill" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Dense">
              <IconButton onClick={onToggleDense}>
                <Iconify icon="eva:collapse-fill" />
              </IconButton>
            </Tooltip>

            <Tooltip title="More">
              <IconButton>
                <Iconify icon="eva:more-vertical-fill" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Stack>

      <TextField
        size="small"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 180 }}
      />

      {smUp && (
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            1 - {mailsLength} of {mailsLength}
          </Typography>

          <Tooltip title="Next page">
            <IconButton>
              <Iconify icon="eva:arrow-ios-back-fill" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Previous page">
            <IconButton>
              <Iconify icon="eva:arrow-ios-forward-fill" />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Stack>
  );
}
