import React, { FC } from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Box, Container, ThemeProvider, Paper } from '@mui/material';

// Components
import Header from 'components/header';
import Footer from 'components/footer';

// Routes
import NoMatchError from 'routes/noMatchError';
import Characters from 'routes/characters';
import Series from 'routes/series';
import Comics from 'routes/comics';
import CharacterDescription from 'routes/characterDescription';
import ComicsDescription from 'routes/comicsDescription';

// Themes
import themesStore from 'stores/ThemesStore';
import SeriesDescription from 'routes/seriesDescription';

const App: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Characters />
        },
        {
          path: '/:id',
          element: <CharacterDescription />
        },
        {
          path: '/comics',
          element: <Comics />
        },
        {
          path: '/comics/:id',
          element: <ComicsDescription />
        },
        {
          path: '/series',
          element: <Series />
        },
        {
          path: '/series/:id',
          element: <SeriesDescription />
        },
        { path: '*', element: <NoMatchError /> }
      ]
    }
  ];

  const element = useRoutes(routes);

  return (
    <ThemeProvider theme={themesStore.theme}>
      <Header />
      <Paper elevation={0} square sx={{ minHeight: '92.8vh', flexGrow: 1 }}>
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

export default observer(App);
