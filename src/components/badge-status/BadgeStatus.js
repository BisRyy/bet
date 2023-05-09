import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
//
import { StyledBadgeStatus } from './styles';

// ----------------------------------------------------------------------

BadgeStatus.propTypes = {
  sx: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  status: PropTypes.oneOf(['away', 'busy', 'unread', 'online', 'offline', 'invisible']),
};

export default function BadgeStatus({ size = 'medium', status = 'offline', sx }) {
  const theme = useTheme();

  return <StyledBadgeStatus ownerState={{ status, size }} sx={sx} theme={theme} />;
}
