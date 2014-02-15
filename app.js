// __RequireJS Configuration__
requirejs.config({
  paths: {
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/underscore/underscore',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    backbone: 'bower_components/backbone/backbone',
    alertify: 'bower_components/alertify/alertify',
    text: 'bower_components/text/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

// __Module Definition__
define(function (require) {
  // __Dependencies__
  var $ = require('jquery');
  var alertify = require('alertify');
  var Backbone = require('backbone');
  var Router = require('./Router');

  // __Private Module Members__
  var router = new Router();

  // __Module Definition__
  var app = {};

  $(document).ready(function () {
    // TODO with pushState, you need some way to either serve or redirect to the
    // main app URL.  Use hashbang for simplicity for the moment.
    Backbone.history.start({ pushState: false });
  });

  return app;
});
