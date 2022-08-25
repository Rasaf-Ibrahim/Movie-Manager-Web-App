import React from 'react';
import ReactDOM from 'react-dom/client';

// App.jsx
import App from './App';

// styles
import 'styles/index.css';
import MuiTheme from 'styles/mui-theme/mui-theme'


const root = ReactDOM.createRoot
  (document.getElementById('root'));
root.render(
  <MuiTheme>
      <App />
  </MuiTheme>
);