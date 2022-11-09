import React, { FC } from 'react';
import {
  Box,
  Container,
  ThemeProvider,
  Paper,
  Typography
} from '@mui/material';

// Components
import Header from 'components/header';
import Footer from 'components/footer';

// Themes
import themes from 'themes';

const App: FC = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <Header />
      <Paper elevation={0} square>
        <Container>
          <Box
            sx={{
              pt: { xs: 10, sm: 13, md: 17, lg: 19 },
              pb: { xs: 7, sm: 10, md: 14, lg: 16 }
            }}
          >
            <Typography>
              {[...new Array(90)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </Typography>
          </Box>
        </Container>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
