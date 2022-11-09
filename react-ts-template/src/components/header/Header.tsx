import React, { FC, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';

import { Link } from 'react-router-dom';
import logo from '../../assets/marvel_logo.svg';

interface Props {
  children: React.ReactElement;
}

const pages = ['Characters', 'Comics', 'Series'];

const HideOnScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                width: 90,
                display: { xs: 'none', md: 'block' },
                pt: 1,
                mr: 0
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr: 1 }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={`/${page}`.replace('Characters', '')}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                width: 90,
                display: { xs: 'block', md: 'none' },
                pt: 1,
                mr: 0
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: 'auto'
              }}
            >
              {pages.map((page) => (
                <Button
                  key={`${page}111`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link to={`/${page}`.replace('Characters', '')}>{page}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
