import PropTypes from 'prop-types';
import { useState } from 'react';
import NextLink from 'next/link';
// @mui
import Masonry from '@mui/lab/Masonry';
import { alpha } from '@mui/material/styles';
import { Link, List, Paper, ListItem, Typography, Divider, Stack } from '@mui/material';
// config
import { NAV } from '../../config-global';
// components
import Iconify from '../iconify';
//
import MenuHotProducts from './MenuHotProducts';
import MegaMenuCarousel from './MenuCarousel';

// ----------------------------------------------------------------------

const MENU_PAPER_WIDTH = 800;
const PARENT_ITEM_HEIGHT = 40;

MegaMenuDesktopVertical.propTypes = {
  data: PropTypes.array,
};

export default function MegaMenuDesktopVertical({ data, ...other }) {
  return (
    <List disablePadding {...other}>
      {data.map((parent) => (
        <MegaMenuItem key={parent.title} parent={parent} />
      ))}
    </List>
  );
}

// ----------------------------------------------------------------------

MegaMenuItem.propTypes = {
  parent: PropTypes.object,
};

function MegaMenuItem({ parent }) {
  const { title, path, more, products, tags, children } = parent;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (children) {
    return (
      <>
        <ParentItem
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          path={path}
          title={title}
          open={open}
          hasSub
        />

        {open && (
          <Paper
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            sx={{
              p: 3,
              top: -62,
              borderRadius: 2,
              position: 'absolute',
              left: NAV.W_BASE,
              width: MENU_PAPER_WIDTH,
              boxShadow: (theme) => theme.customShadows.z20,
            }}
          >
            <Masonry columns={3} spacing={2}>
              {children.map((list) => (
                <Stack key={list.subheader} spacing={1.25} sx={{ mb: 2.5 }}>
                  <Typography variant="subtitle1" noWrap>
                    {list.subheader}
                  </Typography>

                  {list.items.map((link) => (
                    <Link
                      key={link.title}
                      component={NextLink}
                      href={link.path}
                      noWrap
                      underline="none"
                      sx={{
                        typography: 'body2',
                        color: 'text.primary',
                        fontSize: 13,
                        transition: (theme) => theme.transitions.create('all'),
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Masonry>

            {!!more && !!products && !!tags && (
              <Stack spacing={3}>
                <Link
                  component={NextLink}
                  href={more.path}
                  sx={{ typography: 'body2', display: 'inline-flex', fontSize: 13 }}
                >
                  {more.title}
                </Link>

                <Divider />

                <MegaMenuCarousel
                  products={products}
                  numberShow={6}
                  sx={{ '& .controlsArrows': { mt: 5 } }}
                />

                <Divider />

                <MenuHotProducts tags={tags} />
              </Stack>
            )}
          </Paper>
        )}
      </>
    );
  }

  return <ParentItem path={path} title={title} />;
}

// ----------------------------------------------------------------------

ParentItem.propTypes = {
  open: PropTypes.bool,
  hasSub: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string,
};

function ParentItem({ path = '', title, open, hasSub, ...other }) {
  const activeStyle = {
    color: 'primary.main',
    bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
  };

  return (
    <Link component={NextLink} href={path} underline="none">
      <ListItem
        sx={{
          pl: 2.5,
          pr: 1.5,
          height: PARENT_ITEM_HEIGHT,
          cursor: 'pointer',
          color: 'text.primary',
          typography: 'subtitle2',
          textTransform: 'capitalize',
          justifyContent: 'space-between',
          transition: (theme) => theme.transitions.create('all'),
          '&:hover': activeStyle,
          ...(open && activeStyle),
        }}
        {...other}
      >
        {title}

        {hasSub && <Iconify icon="eva:chevron-right-fill" sx={{ ml: 1 }} />}
      </ListItem>
    </Link>
  );
}
