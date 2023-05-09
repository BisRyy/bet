// @mui
import { alpha, styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

const CustomTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'width',
})(({ width, theme }) => ({
  '& fieldset': {
    display: 'none',
  },
  '& .MuiOutlinedInput-root': {
    width,
    border: `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
    transition: theme.transitions.create(['box-shadow', 'width'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {
      boxShadow: theme.customShadows.z20,
      ...(width && {
        [theme.breakpoints.up('sm')]: {
          width: width + 60,
        },
      }),
    },
  },
}));

export default CustomTextField;
