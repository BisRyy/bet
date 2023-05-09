import PropTypes from 'prop-types';
//
import { StyledPopup } from './styles';

// ----------------------------------------------------------------------

MapPopup.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default function MapPopup({ sx, children, ...other }) {
  return (
    <StyledPopup anchor="bottom" sx={sx} {...other}>
      {children}
    </StyledPopup>
  );
}
