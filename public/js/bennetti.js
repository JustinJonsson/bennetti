var app = angular.module('bennetti', ['ui.router']);

//Router
app.config(function($stateProvider, $locationProvider) {
  
  //$locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html'
  });

  $stateProvider
  .state('users', {
    url: '/useradmin',
    templateUrl: 'useradmin.html'
  });

  $stateProvider
  .state('locales', {
    url: '/locales',
    templateUrl: 'localeadmin.html'
  });

  $stateProvider
  .state('profile', {
    url: '/profile',
    templateUrl: 'profile.html'
  });
});
