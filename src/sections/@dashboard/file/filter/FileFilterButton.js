import PropTypes from 'prop-types';
// @mui
import { Box, Button } from '@mui/material';

// ----------------------------------------------------------------------

FileFilterButton.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
};

export default function FileFilterButton({ children, isSelected, ...other }) {
  return (
    <Button
      variant="soft"
      color="inherit"
      sx={{
        textTransform: 'unset',
        color: 'text.secondary',
        width: { xs: 1, md: 'auto' },
        justifyContent: 'flex-start',
        fontWeight: 'fontWeightMedium',
        ...(isSelected && {
          color: 'text.primary',
        }),
      }}
      {...other}
    >
      {children}

      <Box sx={{ flexGrow: 1 }} />
    </Button>
  );
}
