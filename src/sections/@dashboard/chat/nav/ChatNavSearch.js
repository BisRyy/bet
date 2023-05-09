import PropTypes from 'prop-types';
// @mui
import { InputAdornment, ClickAwayListener } from '@mui/material';
// components
import Iconify from '../../../../components/iconify';
import { CustomTextField } from '../../../../components/custom-input';

// ----------------------------------------------------------------------

ChatNavSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClickAway: PropTypes.func,
};

export default function ChatNavSearch({ value, onChange, onClickAway }) {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <CustomTextField
        fullWidth
        size="small"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
        sx={{ mt: 2.5 }}
      />
    </ClickAwayListener>
  );
}
