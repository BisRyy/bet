import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Link, CardActionArea } from '@mui/material';
// components
import Image from '../../../../components/image';
import Iconify from '../../../../components/iconify';
//
import { ListItem } from './styles';
import { useLocales } from '../../../../locales';


// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ item, open, isOffset, active, subItem, isExternalLink, ...other }, ref) => {
    const { title, path, children } = item;
    const { translate } = useLocales();


    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        isOffset={isOffset}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {translate(title)}

        {!!children && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}
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
);

NavItem.propTypes = {
  open: PropTypes.bool,
  item: PropTypes.object,
  active: PropTypes.bool,
  subItem: PropTypes.bool,
  isOffset: PropTypes.bool,
  isExternalLink: PropTypes.bool,
};

// ----------------------------------------------------------------------

NavItemDashboard.propTypes = {
  item: PropTypes.object,
  sx: PropTypes.object,
};

export function NavItemDashboard({ item, sx, ...other }) {
const { translate } = useLocales();

  return (
    <Link component={NextLink} href={item.path} underline="none" sx={{ width: 1 }} {...other}>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 1,
          color: 'text.disabled',
          bgcolor: 'background.neutral',

          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Image
            visibleByDefault
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}
