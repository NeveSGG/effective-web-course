import React, { FC } from 'react';
import {
  Box,
  Container,
  Toolbar,
  ThemeProvider,
  createTheme
} from '@mui/material';

// Components
import Header from 'components/header';

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

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(90)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
