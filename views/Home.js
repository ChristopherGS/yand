//chegongzhuang west

define(function (require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var alertify = require('alertify');
  var template = require('text!templates/home.html');

  var View = Backbone.View.extend({
    template: _.template(template),
    el: 'body',
    initialize: function() {

      this.render();
    },
    events: {

    },
    render: function(){
      this.$el.html(this.template());
      return this;
    },

  });

  return View;
});
