

App = Ember.Application.create();

App.PRODUCTS  = [ {title: "Krusty Burger\'s"},
                  {title: "Burn\'s O\'s"} ]
App.COLORS    = ['red', 'yellow', 'blue']

App.Router.map(function() {
  this.route('about')
  this.route('products')
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return App.COLORS;
  }
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
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

