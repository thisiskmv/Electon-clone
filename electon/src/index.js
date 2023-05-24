import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-iv2ifgk05xfqb1m6.us.auth0.com"
  clientId="Zs20TmXAX5QV81D9REMmJPM04eQ2fhP5"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
