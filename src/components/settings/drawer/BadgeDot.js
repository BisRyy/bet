import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

BadgeDot.propTypes = {
  sx: PropTypes.object,
};

export default function BadgeDot({ sx, ...other }) {
  return (
    <Box
      sx={{
        top: 6,
        right: 4,
        width: 8,
        height: 8,
        borderRadius: '50%',
        position: 'absolute',
        bgcolor: 'error.main',
        ...sx,
      }}
      {...other}
    />
  );
}
