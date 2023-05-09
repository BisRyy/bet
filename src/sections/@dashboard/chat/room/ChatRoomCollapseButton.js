import PropTypes from 'prop-types';
// @mui
import { Button } from '@mui/material';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

ChatRoomCollapseButton.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
  isCollapse: PropTypes.bool,
  onCollapse: PropTypes.func,
};

export default function ChatRoomCollapseButton({ isCollapse, onCollapse, children, sx, ...other }) {
  return (
    <Button
      fullWidth
      color="inherit"
      onClick={onCollapse}
      endIcon={
        <Iconify
          width={16}
          icon={isCollapse ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
        />
      }
      sx={{
        height: 40,
        flexShrink: 0,
        borderRadius: 0,
        typography: 'overline',
        color: 'text.disabled',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(1, 1.5, 1, 2.5),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Button>
  );
}
