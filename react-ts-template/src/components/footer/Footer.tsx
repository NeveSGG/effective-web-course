import React, { FC } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Link,
  Typography
} from '@mui/material';

import { useTranslation } from 'react-i18next';

import logo from '../../assets/marvel_logo.svg';

const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
            <Typography variant="body2" align="right">
              <>{t('footer')}</> Marvel. © {currentYear} MARVEL
            </Typography>
            <Typography variant="body2" align="right">
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
