import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
// components
import { StyledControlPanel } from '../../../../../components/map';

// ----------------------------------------------------------------------

ControlPanel.propTypes = {
  data: PropTypes.array,
  onSelectCity: PropTypes.func,
  selectedCity: PropTypes.string,
};

function ControlPanel({ data, selectedCity, onSelectCity }) {
  return (
    <StyledControlPanel>
      {data.map((city) => (
        <RadioGroup
          key={city.city}
          value={selectedCity}
          onChange={(event) => onSelectCity(event, city)}
        >
          <FormControlLabel
            value={city.city}
            label={city.city}
            control={<Radio size="small" />}
            sx={{ color: 'common.white' }}
          />
        </RadioGroup>
      ))}
    </StyledControlPanel>
  );
}

export default memo(ControlPanel);
