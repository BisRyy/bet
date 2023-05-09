import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Link, ListItemText, ListItemIcon } from '@mui/material';
// components
import Iconify from '../../../../components/iconify';
//
import { ListItem } from './styles';

// ----------------------------------------------------------------------

NavItem.propTypes = {
  open: PropTypes.bool,
  active: PropTypes.bool,
  item: PropTypes.object,
  isExternalLink: PropTypes.bool,
};

export default function NavItem({ item, open, active, isExternalLink, ...other }) {
  const { title, path, icon, children } = item;

  const renderContent = (
    <ListItem active={active} {...other}>
      <ListItemIcon> {icon} </ListItemIcon>

      <ListItemText disableTypography primary={title} />

      {!!children && (
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1 }}
        />
      )}
    </ListItem>
  );

  // ExternalLink
  if (isExternalLink) {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        {renderContent}
      </Link>
    );
  }

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link component={NextLink} href={path} underline="none">
      {renderContent}
    </Link>
  );
}
