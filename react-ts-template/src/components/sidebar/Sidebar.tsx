import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import {
  Box,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Tabs,
  Tab
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import themesStore from 'stores/ThemesStore';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
