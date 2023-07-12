export const oktaConfig = {
  clientId: "BkyeB0wG9MiCTRIvzKVs2Q03SeChuoOj",
  issuer: "https://dev-drxxfs1wtg7qwnn0.us.auth0.com.okta.com/oauth2/default",
  redirectUri: window.location.origin + "/implicit/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
