import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Checkbox, Portal } from '@mui/material';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  right: 24,
  zIndex: 9,
  bottom: 40,
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  boxShadow: theme.customShadows.z20,
  padding: theme.spacing(1.5, 1, 1.5, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.text.primary,
}));

// ----------------------------------------------------------------------

FileActionSelected.propTypes = {
  sx: PropTypes.object,
  action: PropTypes.node,
  selected: PropTypes.array,
  rowCount: PropTypes.number,
  numSelected: PropTypes.number,
  onSelectAllItems: PropTypes.func,
};

export default function FileActionSelected({
  action,
  selected,
  rowCount,
  numSelected,
  onSelectAllItems,
  sx,
  ...other
}) {
  return (
    <Portal>
      <StyledRoot sx={sx} {...other}>
        <Checkbox
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={(event) => onSelectAllItems(event.target.checked)}
          icon={<Iconify icon="eva:radio-button-off-fill" />}
          checkedIcon={<Iconify icon="eva:checkmark-circle-2-fill" />}
          indeterminateIcon={<Iconify icon="eva:minus-circle-fill" />}
        />

        {selected && (
          <Typography
            variant="subtitle2"
            sx={{
              mr: 2,
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            }}
          >
            {selected.length}
            <Box component="span" sx={{ ml: 0.5 }}>
              items selected
            </Box>
          </Typography>
        )}

        {action && action}
      </StyledRoot>
    </Portal>
  );
}
