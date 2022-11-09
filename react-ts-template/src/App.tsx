import React, { FC } from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import {
  Box,
  Container,
  ThemeProvider,
  createTheme,
  Paper,
  Typography
} from '@mui/material';

// Components
import Header from 'components/header';
import Footer from 'components/footer';
import Characters from 'components/characters';
import Series from 'components/series';
import Comics from 'components/comics';
import NoMatchError from 'components/no-match-error';

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

const Layout = () => <Outlet />;

const App: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/characters',
      element: <Characters />
    },
    {
      path: '/comics',
      element: <Comics />
    },
    {
      path: '/series',
      element: <Series />
    },
    { path: '*', element: <NoMatchError /> }
  ];

  const element = useRoutes(routes);

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      {element}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
