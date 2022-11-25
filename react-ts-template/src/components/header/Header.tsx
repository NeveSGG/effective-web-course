import React, { FC, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { observer } from 'mobx-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Sidebar from 'components/sidebar';

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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClickOutsideNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    const path = `/${event.currentTarget.id}`.replace(
      'randomValueToRemove',
      ''
    );
    navigate(path);
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
                onClose={handleClickOutsideNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    id={page}
                    color="primary"
                    onClick={handleCloseNavMenu}
                    selected={pathname === `/${page}`}
                  >
                    {t(page)}
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
                  key={`${page}randomValueToRemove`}
                  id={`${page}randomValueToRemove`}
                  onClick={handleCloseNavMenu}
                  color="warning"
                  sx={{
                    my: 2,
                    display: 'block'
                  }}
                  variant={pathname === `/${page}` ? 'outlined' : 'text'}
                >
                  {t(page)}
                </Button>
              ))}
            </Box>
            <Sidebar />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default observer(Header);
