var app = angular.module('bennetti', ['ui.router']);

//Router
app.config(function($stateProvider, $locationProvider) {
  
  //$locationProvider.html5Mode(true); 

  $stateProvider
  .state('home', {
    name: 'home',
    url: '/',
    templateUrl: '/home.html'
  });

  $stateProvider
  .state('users', {
    name: 'users',
    url: '/useradmin',
    templateUrl: '/useradmin.html'
  });

  $stateProvider
  .state('locales', {
    name: 'locales',
    url: '/locales',
    templateUrl: 'localeadmin.html'
  });
});
