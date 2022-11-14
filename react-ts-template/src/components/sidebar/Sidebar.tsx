import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import {
  Box,
  IconButton,
  SwipeableDrawer,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import themesStore from 'stores/ThemesStore';
import translationStore from 'stores/TranslationStore';
import { useTranslation } from 'react-i18next';

const Sidebar: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

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

  const handleSelectChange = (event: SelectChangeEvent) => {
    translationStore.changeLanguage(event.target.value);
    i18n.changeLanguage(translationStore.language);
  };

  const handleThemeChange = () => {
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
          onChange={handleThemeChange}
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
      <Box sx={{ width: '100%', px: 2, py: 3 }}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            <>{t('language_label')}</>
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={translationStore.language}
            onChange={handleSelectChange}
            label="Language"
            fullWidth
          >
            <MenuItem value="ru">Русский</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
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
