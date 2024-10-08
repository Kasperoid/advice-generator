import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { SWRConfig } from 'swr';
import GlobalStyles from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SWRConfig
    value={{
      refreshInterval: 0,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
    }}
  >
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </SWRConfig>
);
