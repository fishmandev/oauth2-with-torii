import OAuthCustomAuthenticator from 'auth/authenticators/oauth2-custom';

export default {
  name: 'oauth2-custom',

  initialize: function(container) {
    container.register(
      'oauth2-custom:oauth2-password-grant',
      OAuthCustomAuthenticator);
  }
};
