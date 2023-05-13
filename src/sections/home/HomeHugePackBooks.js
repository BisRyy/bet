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
  CardMedia,
} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgGradient } from '../../utils/cssStyles';
// routes
import { PATH_PAGE } from '../../routes/paths';
// _mock
import _mock from '../../_mock';
import {books} from '../../_mock/_book';
// components
import Label from '../../components/label';
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import MenuPopover from '../../components/menu-popover';
import BadgeStatus from '../../components/badge-status';
import { CustomAvatar, CustomAvatarGroup } from '../../components/custom-avatar';
import { MotionViewport, varFade } from '../../components/animate';
import { useLocales } from '../../locales';

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
  const { translate:t } = useLocales();

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid direction={{ xs: 'column', md: 'row-reverse' }} container spacing={5}>
          <Grid item xs={12} md={5}>
            <Description t={t}/>
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <Content />
          </Grid>

          {!isDesktop && (
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <ViewAllButton />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Description({t}) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledDescription>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          {t('home.books.subtitle')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          {t('home.books.title')} <br />
          {t('home.books.title2')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mb: 5,
            color: 'text.secondary',
          }}
        >
          {t('home.books.description')}
        </Typography>
      </m.div>

      {isDesktop && <ViewAllButton />}
    </StyledDescription>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <StyledContent>
      <Scrollbar>
        <Stack spacing={5} sx={{ px: 2, py: 5 }}>
          <Grid container spacing={5}>
            {books.slice(0, 9).map((book) => (
              <Grid key={book._id} item xs={4} sm={4} md={4}>
                <m.div variants={varFade().inUp}>
                  <CardMedia
                    component={MotionViewport}
                    sx={{ height: 180, borderRadius: 2 }}
                    image={book.image}
                  />
                </m.div>
              </Grid>

            ))}
          </Grid>
        </Stack>
      </Scrollbar>
    </StyledContent>
  );
}

// ----------------------------------------------------------------------

function ViewAllButton() {
  const { translate:t } = useLocales();
  return (
    <m.div variants={varFade().inUp}>
      <Button
        size="large"
        color="inherit"
        variant="outlined"
        href={PATH_PAGE.books}
        endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
      >
        {t('home.books.viewAll')}
      </Button>
    </m.div>
  )
}
