export const oktaConfig = {
  clientId: "0oaacn00y2pK0bAet5d7",
  issuer: "https://dev-84220665.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
