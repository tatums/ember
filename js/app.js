App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3002',
  namespace: 'api/v1',
  headers: {"Accept": "application/json, text/javascript; q=0.01"}
});


App.Router.map(function() {
  this.resource('products')
  this.route('about')
});


App.IndexController = Ember.Controller.extend({
  itemsCount: 6,
  time: function() {
    return (new Date()).toDateString()
  }.property(),

  open: function(){
    var day = (new Date()).getDay()
    if (day == 0)
      { return 'closed'}
    else
      { return 'open' }
  }.property()
});

// PRODUCTS //
App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('product');
  }
});

App.Product = DS.Model.extend({
  name:        DS.attr('string'),
  description: DS.attr('string')
});


// About //
App.AboutRoute = Ember.Route.extend({
  model: function() {
    return App.COLORS;
  }
});

App.Color = DS.Model.extend({
  title: DS.attr('string')
});

App.COLORS = ['red','yellow','blue']
