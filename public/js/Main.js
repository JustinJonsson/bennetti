var app = angular.module('bennetti', [ 'ngMaterial', 'ui.router' ]);

app.controller('HomeController', [
  '$scope', 'HomeService',
  HomeService
]);

app.factory('HomeService', HomeService);

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
    ).state('users.add',
      {
        parent: 'users',
        /*url: '/users',*/
        templateUrl: 'useradmin.add.html'
      }
    ).state('users.edit',
      {
        parent: 'users',
        /*url: '/users',*/
        templateUrl: 'useradmin.edit.html'
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
