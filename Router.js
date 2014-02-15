define(function (require) {
  var Backbone = require('backbone');
  var Bootstrap = require('bootstrap');

  var HomeView = require('views/Home');
  var AppView = require('views/App');
  

  var Router = Backbone.Router.extend({
    routes: {
      "": "home"
    },
    trackView: function (next) {
      if (this.current) this.current.close();
      this.current = next;
    },
    initialize: function() {
      //console.log('initialized');
    },
    home: function() {
      console.log('home route');
      this.trackView(new HomeView());
    }
  });

  return Router;
});
