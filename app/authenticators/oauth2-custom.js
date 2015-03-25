import Ember from 'ember';
import Authenticator from 'simple-auth-oauth2/authenticators/oauth2';

export default Authenticator.extend({
  makeRequest: function (url, data) {
    //TODO Need move to enviroment.js
    data.client_id = '';
    data.client_secret = '';

    return Ember.$.ajax({
      url: this.serverTokenEndpoint,
      type: 'POST',
      data: data,
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded'
    });
  }
});
