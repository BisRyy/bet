import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Fab,
  Tab,
  Box,
  Grid,
  Tabs,
  Chip,
  Alert,
  Stack,
  Radio,
  Paper,
  Button,
  Rating,
  Slider,
  Switch,
  MenuItem,
  Checkbox,
  Container,
  TextField,
  Typography,
  AlertTitle,
  Pagination,
  CardHeader,
  IconButton,
  ToggleButton,
  CircularProgress,
  FormControlLabel,
  ToggleButtonGroup,
} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgGradient } from '../../utils/cssStyles';
// routes
import { PATH_PAGE } from '../../routes/paths';
// _mock
import _mock from '../../_mock';
// components
import Label from '../../components/label';
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import MenuPopover from '../../components/menu-popover';
import BadgeStatus from '../../components/badge-status';
import { CustomAvatar, CustomAvatarGroup } from '../../components/custom-avatar';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(20),
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.98),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  padding: theme.spacing(1.5, 0),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 0),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2.5),
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(15),
  },
}));

const StyledRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': {
    margin: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(2.5),
    },
  },
}));

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid direction={{ xs: 'column', md: 'row-reverse' }} container spacing={5}>
          <Grid item xs={12} md={5}>
            <Description />
          </Grid>

          <Grid item xs={12} md={7}>
            <Content />
          </Grid>

          {!isDesktop && (
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              {ViewAllButton}
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Description() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledDescription>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          Interface Starter Kit
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Huge pack <br />
          of Books
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mb: 5,
            color: 'text.secondary',
          }}
        >
          We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just
          dive in!
        </Typography>
      </m.div>

      {isDesktop && ViewAllButton}
    </StyledDescription>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <StyledContent>
   sfs
    </StyledContent>
  );
}

// ----------------------------------------------------------------------

const ViewAllButton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      color="inherit"
      variant="outlined"
      target="_blank"
      rel="noopener"
      href={PATH_PAGE.components}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
    >
      View All Books
    </Button>
  </m.div>
);
