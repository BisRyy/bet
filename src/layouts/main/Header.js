import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link, IconButton, Stack } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER, PATH_AFTER_LOGIN } from '../../config-global';
// routes
// components
import Logo from '../../components/logo';
import Label from '../../components/label';
//
import NavMobile from './nav/mobile';
import navConfig from './nav/config-navigation';
import NavDesktop from './nav/desktop';
import LanguagePopover from '../dashboard/header/LanguagePopover';
import { useLocales } from '../../locales';
import { useSettingsContext } from '../../components/settings';
import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const { themeMode, onToggleMode } = useSettingsContext();

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  const { translate: t } = useLocales();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />
          <Label color="info"> Bete Liq </Label>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

          <IconButton color={themeMode === 'dark' ? 'warning' : 'default'} onClick={onToggleMode}>
            <SvgColor
              src={`/assets/icons/setting/ic_${themeMode === 'light' ? 'moon' : 'sun'}.svg`}
            />
          </IconButton>
          <LanguagePopover />

          <Stack direction="row" spacing={1}>
            <Button variant="outlined" rel="noopener" href={'/blogs'}>
              {t('header.blogs')}
            </Button>
            <Button variant="contained" rel="noopener" href={PATH_AFTER_LOGIN}>
              {t('header.login')}
            </Button>
          </Stack>

          {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}

          {/* <Box sx={{ flexGrow: 0.5 }} /> */}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
