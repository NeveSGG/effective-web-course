import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e62429'
    },
    secondary: {
      main: '#909090'
    }
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e62429'
    },
    secondary: {
      main: '#909090'
    }
  }
});

const themes = {
  light: lightTheme,
  dark: darkTheme
};

export default themes;
