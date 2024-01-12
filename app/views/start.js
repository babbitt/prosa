var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');
var templates = require('../../dist/templates');
var auth = require('../config');
var cookie = require('../cookie');

// Set scope
auth.scope = cookie.get('scope') || 'repo';

module.exports = Backbone.View.extend({
  id: 'start',

  initialize: function () {
    this.persistScope(auth.scope);
  },

  events: {
    'click a[href="#scopes"]': 'toggleScope',
    'change .toggle-hide select': 'setScope',
    'click a[href="#setGhpToken"]': 'setGhpToken',
    'keypress input[name="ghpToken"]': 'setGhpToken'
  },

  template: templates.start,

  render: function() {
    this.$el.html(_.template(this.template, auth, { variable: 'auth' }));
    return this;
  },

  setGhpToken: function(e) {
    if (e.type === 'keypress' && e.keyCode !== 13) return;
    if (e.type === 'click') e.preventDefault();
    var token = this.$('input[name="ghpToken"]').val();
    if (!token) return;
    cookie.set('oauth-token', token);
    window.location.reload();
  },

  toggleScope: function(e) {
    e.preventDefault();
    this.$('.toggle-hide').toggleClass('show');
  },

  setScope: function(e) {
    var scope = $(e.currentTarget).val();
    this.persistScope(scope);
    this.render();
    router.app.nav.render();
  },

  persistScope: function(scope) {
    var expire = new Date((new Date()).setYear((new Date()).getFullYear() + 20));
    auth.scope = scope;
    cookie.set('scope', scope, expire);
  }
});
