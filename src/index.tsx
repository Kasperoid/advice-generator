import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './styles/card/card.css';
import './styles/main/main.css';
import { SWRConfig } from 'swr';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SWRConfig
    value={{
      refreshInterval: 0,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SWRConfig>
);
