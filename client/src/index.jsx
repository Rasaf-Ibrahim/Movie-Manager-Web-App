import React from 'react';
import ReactDOM from 'react-dom/client';

// App.jsx
import App from './App';

// styles
import 'styles/index.css';
import MuiTheme from 'styles/mui-theme/mui-theme'

//  redux toolkit 
import { store } from 'redux-toolkit/store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot
  (document.getElementById('root'));
root.render(
  
  <MuiTheme>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiTheme>
);