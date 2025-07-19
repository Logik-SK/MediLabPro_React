import { useNavigate } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import LoadingScreen from '../common/LoadingScreen';


const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/', { replace: true });
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Auth0LoadingGate>{children}</Auth0LoadingGate>
    </Auth0Provider>
  );
};


const Auth0LoadingGate = ({ children }) => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingScreen message="Initializing authentication…" />;
  }

  return children;
};

export default Auth0ProviderWithNavigate;
