App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3001',
  namespace: 'api/v1',
  headers: {"Accept": "application/json, text/javascript; q=0.01"}
});


App.Router.map(function() {
  this.resource('products', function() {
    this.resource('product', { path: '/:product_id' });
  });
  this.route('about');
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

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.product_id);
  }
});


App.Product = DS.Model.extend({
  name:        DS.attr('string'),
  description: DS.attr('string'),
  images: DS.hasMany('image', {async: true})
});

App.Image = DS.Model.extend({

  url:              DS.attr('string'),
  imageable_type:   DS.attr('string'),
  product:          DS.belongsTo('product')
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
