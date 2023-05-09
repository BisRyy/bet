import PropTypes from 'prop-types';
// @mui
import { InputBase } from '@mui/material';

// ----------------------------------------------------------------------

KanbanInputName.propTypes = {
  sx: PropTypes.object,
};

export default function KanbanInputName({ sx, ...other }) {
  return (
    <InputBase
      sx={{
        flexGrow: 1,
        '& .MuiInputBase-input': {
          py: 1,
          borderRadius: 1,
          typography: 'h6',
          border: `solid 1px transparent`,
          transition: (theme) => theme.transitions.create(['padding-left', 'border-color']),
          '&:hover, &:focus': {
            pl: 1,
            border: (theme) => `solid 1px ${theme.palette.text.primary}`,
          },
        },
        ...sx,
      }}
      {...other}
    />
  );
}
