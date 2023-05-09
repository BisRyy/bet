// @mui
import { alpha, styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

const CustomSmallSelect = styled((props) => (
  <TextField select SelectProps={{ native: true }} {...props} />
))(({ theme }) => ({
  '& fieldset': {
    display: 'none',
  },
  '& select': {
    ...theme.typography.subtitle2,
    padding: theme.spacing(0.5, 0, 0.5, 1),
    paddingRight: '28px !important',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: Number(theme.shape.borderRadius) * 0.75,
    backgroundColor: alpha(theme.palette.grey[500], 0.08),
  },
}));

export default CustomSmallSelect;
