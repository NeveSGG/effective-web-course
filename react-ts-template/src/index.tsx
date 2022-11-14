import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import App from './App';

import '../i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
