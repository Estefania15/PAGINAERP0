// src/components/Auth0Provider.js

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

// Este archivo es un wrapper (envoltorio) que nos ayuda a usar Auth0 en nuestra app.
const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  // Reemplaza con los valores correctos de tu aplicación en Auth0
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={(appState) => navigate(appState?.returnTo || window.location.pathname)}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
