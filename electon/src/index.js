import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";
import {BrowserRouter} from "react-router-dom"
import store from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-iv2ifgk05xfqb1m6.us.auth0.com"
  clientId="Zs20TmXAX5QV81D9REMmJPM04eQ2fhP5"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  
  <Provider store={store}>
    <App />
  </Provider>
  
  </Auth0Provider>
);

