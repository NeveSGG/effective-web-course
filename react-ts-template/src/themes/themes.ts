import { createTheme, responsiveFontSizes } from '@mui/material';

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#e62429'
      },
      secondary: {
        main: '#909090'
      }
    }
  })
);

const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#e62429'
      },
      secondary: {
        main: '#909090'
      }
    }
  })
);

const themes = {
  light: lightTheme,
  dark: darkTheme
};

export default themes;
