var app = angular.module('bennetti', [ 'ngMaterial', 'ui.router' ]);

/*app.controller('UserController', [
  '$scope', 'UserFactory',
  UserController
]);*/

app.controller('HomeController', [
  '$scope', 'HomeFactory',
  HomeController
]);

//app.factory('UserFactory', UserFactory);

app.factory('HomeFactory', HomeFactory);

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
