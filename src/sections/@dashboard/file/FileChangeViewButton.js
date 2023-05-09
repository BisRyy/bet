import PropTypes from 'prop-types';
// @mui
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

FileChangeViewButton.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default function FileChangeViewButton({ value, onChange, ...other }) {
  return (
    <ToggleButtonGroup
      size="small"
      color="primary"
      value={value}
      exclusive
      onChange={onChange}
      {...other}
    >
      <ToggleButton value="list">
        <Iconify icon="eva:list-fill" />
      </ToggleButton>

      <ToggleButton value="grid">
        <Iconify icon="eva:grid-fill" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
