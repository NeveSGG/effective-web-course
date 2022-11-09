import React, { FC } from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

// Components
import Header from 'components/header';
import Footer from 'components/footer';
import Characters from 'components/characters';
import Series from 'components/series';
import Comics from 'components/comics';
import NoMatchError from 'components/no-match-error';

// Themes
import themes from 'themes';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { index: true, element: <Characters /> },
      {
        path: '/comics',
        element: <Comics />
      },
      {
        path: '/series',
        element: <Series />
      },
      { path: '*', element: <NoMatchError /> }
    ]
  }
];

const element = useRoutes(routes);

const App: FC = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <Header />
      {element}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
