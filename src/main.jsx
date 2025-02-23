// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../core/App';

// Import consumer-defined config files
import defaultConfig from '../config/defaultConfigs.jsx';
import globalConfig from '../global/globalConfiguration';

// For demonstration, we simulate dynamic config imports via a static object.
const configs = {
  './defaultConfigs.jsx': defaultConfig
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
      defaultConfig={defaultConfig}
      globalConfig={globalConfig}
      configs={configs}
    />
  </React.StrictMode>
);
