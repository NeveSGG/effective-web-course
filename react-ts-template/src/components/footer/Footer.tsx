import React, { FC } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link, Typography } from '@mui/material';

import logo from '../../assets/marvel_logo.svg';

const Footer: FC = () => {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: 120,
              pt: 3,
              pb: 2,
              mr: 'auto'
            }}
          >
            <img src={logo} alt="logo" />
          </Box>
          <Box>
            <Typography variant="subtitle2" align="right">
              Data provided by Marvel. © 2022 MARVEL
            </Typography>
            <Typography variant="subtitle2" align="right">
              <Link href="developer.marvel.com" underline="hover" color="error">
                developer.marvel.com
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
