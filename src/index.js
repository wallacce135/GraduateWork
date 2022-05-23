import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './App(Redux)/store';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    </CookiesProvider>
);


reportWebVitals();
