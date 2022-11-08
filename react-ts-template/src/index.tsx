import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
