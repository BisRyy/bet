import PropTypes from 'prop-types';
// @mui
import { TextField, InputAdornment } from '@mui/material';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

FileFilterName.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function FileFilterName({ filterName, onFilterName }) {
  return (
    <TextField
      size="small"
      value={filterName}
      onChange={onFilterName}
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
