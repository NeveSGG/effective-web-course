import React, { FC, useMemo, useState, useEffect } from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {
  Box,
  Container,
  ThemeProvider,
  Paper,
  createTheme
} from '@mui/material';
import * as locales from '@mui/material/locale';
import { Theme } from '@mui/system';

// Components
import Header from 'components/header';
import Footer from 'components/footer';

// Routes
import NoMatchError from 'routes/no-match-error';
import Characters from 'routes/characters';
import Series from 'routes/series';
import Comics from 'routes/comics';

// Themes
import themesStore from 'stores/ThemesStore';

type SupportedLocales = keyof typeof locales;

const App: FC = () => {
  const [locale, setLocale] = useState<SupportedLocales>('ruRU');

  // const lightThemeRu = useMemo(
  //   () => createTheme(themes.light, locales[locale]),
  //   [locale, themes.light]
  // );

  // const darkThemeRu = useMemo(
  //   () => createTheme(themes.dark, locales[locale]),
  //   [locale, themes.dark]
  // );

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
