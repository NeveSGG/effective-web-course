import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { Box, IconButton, SwipeableDrawer, Tabs, Tab } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import themesStore from 'stores/ThemesStore';

const Sidebar: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setSidebarOpen(open);
    };

  const handleChange = () => {
    if (themesStore.themeInd === 0) {
      themesStore.changeTheme('dark');
    } else if (themesStore.themeInd === 1) {
      themesStore.changeTheme('light');
    }
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        sx={{
          width: '100%',
          height: { sx: 65, md: 70 },
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Tabs
          sx={{ height: { xs: 55, sm: 64, md: 70 } }}
          value={themesStore.themeInd}
          onChange={handleChange}
          aria-label="theme tabs"
        >
          <Tab
            aria-label="Light"
            icon={<LightModeIcon />}
            sx={{ width: '50%', height: { xs: 55, sm: 64, md: 70 } }}
          />
          <Tab
            aria-label="Dark"
            icon={<DarkModeIcon />}
            sx={{ width: '50%', height: { xs: 55, sm: 64, md: 70 } }}
          />
        </Tabs>
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)} color="secondary">
        <SettingsIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={sidebarOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Box>
  );
};

export default observer(Sidebar);
