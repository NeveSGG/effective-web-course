import React, { FC } from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import {
  Box,
  Container,
  ThemeProvider,
  Paper,
  Typography
} from '@mui/material';

// Components
import Header from 'components/header';
import NoMatchError from 'routes/no-match-error';
import Footer from 'components/footer';
import Characters from 'routes/characters';
import Series from 'routes/series';
import Comics from 'routes/comics';

// Themes
import themes from 'themes';

const App: FC = () => {
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

  return (
    <ThemeProvider theme={themes.dark}>
      <Header />
      <Paper elevation={0} square sx={{ minHeight: '92.8vh' }}>
        <Container>
          <Box
            sx={{
              pt: { xs: 10, sm: 13, md: 17, lg: 19 },
              pb: { xs: 7, sm: 10, md: 14, lg: 16 }
            }}
          >
            {element}
          </Box>
        </Container>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
