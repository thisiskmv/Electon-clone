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
  domain="dev-2tajug76q5lry8il.us.auth0.com"
  clientId="gTUqXUaprMgUHS7aY8pmPLG4YXJa8vP2"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  
  <Provider store={store}>
    <App />
  </Provider>
  
  </Auth0Provider>
);

