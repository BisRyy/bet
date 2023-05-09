import PropTypes from 'prop-types';
// @mui
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
//
import useLocales from './useLocales';

// ----------------------------------------------------------------------

ThemeLocalization.propTypes = {
  children: PropTypes.node,
};

export default function ThemeLocalization({ children }) {
  const outerTheme = useTheme();

  const { currentLang } = useLocales();

  const theme = createTheme(outerTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
