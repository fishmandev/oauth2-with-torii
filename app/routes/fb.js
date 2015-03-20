import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaFacebook: function(){
      var route = this,
        controller = this.controllerFor('fb');
      // The provider name is passed to `open`
      this.get('session1').open('facebook-connect').then(function(){
        route.transitionTo('protected');
      }, function(error){
        console.log(error);
        controller.set('error', 'Could not sign you in: '+error.message);
      });
    }
  }
});
