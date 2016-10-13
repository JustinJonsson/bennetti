var app = angular.module('bennetti', [ 'ngMaterial', 'ui.router' ]);

app.controller('UserController', [
  '$scope', 'UserFactory',
  UserController
]);

app.factory('UserFactory', UserFactory);

app.config(function($stateProvider){
    $stateProvider.state('home',
      {
        url: '/',
        templateUrl: 'home.html'
      }
    ).state('users',
      {
        url: '/users',
        templateUrl: 'useradmin.html'
      }
    ).state('locales',
      {
        url: '/locales',
        templateUrl: 'localeadmin.html'
      }
    ).state('default',
      {
        url: '*path',
        templateUrl: 'home.html'
      }
    )
  });
