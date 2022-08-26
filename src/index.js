import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { AppContainer } from './views/containers';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux/es/exports';
import { store } from './lib/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
