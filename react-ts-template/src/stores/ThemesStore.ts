import { observable, action, makeObservable } from 'mobx';
import { createTheme, responsiveFontSizes } from '@mui/material';
import { Theme } from '@mui/system';

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#e62429'
      },
      secondary: {
        main: '#909090'
      }
    }
  })
);

const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#e62429'
      },
      secondary: {
        main: '#909090'
      }
    }
  })
);

class ThemesStore {
  theme: Theme;

  themeInd: number;

  constructor() {
    const onLoadThemeInd = localStorage.getItem('themeInd');
    if (onLoadThemeInd) {
      if (parseInt(onLoadThemeInd, 10) === 0) {
        this.theme = lightTheme;
        this.themeInd = 0;
      } else {
        this.theme = darkTheme;
        this.themeInd = 1;
      }
    } else {
      this.theme = lightTheme;
      this.themeInd = 0;
      localStorage.setItem('themeInd', '0');
    }
    makeObservable(this, {
      changeTheme: action,
      theme: observable,
      themeInd: observable
    });
  }

  changeTheme(newTheme: string) {
    if (newTheme === 'dark') {
      this.theme = darkTheme;
      this.themeInd = 1;
      localStorage.themeInd = '1';
    } else if (newTheme === 'light') {
      this.theme = lightTheme;
      this.themeInd = 0;
      localStorage.themeInd = '0';
    }
  }
}

const themesStore = new ThemesStore();
export default themesStore;
