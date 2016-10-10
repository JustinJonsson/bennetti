var app = angular.module('bennetti', [ 'ngMaterial', 'ui.router' ]);

app.controller('MainController', [
    'userService', '$mdSidenav', '$mdBottomSheet', '$log',
  MainController
]);

app.controller('UserController', [
  'userService', '$mdSidenav', '$mdBottomSheet', '$log',
  UserController
]);

app.service('userService', ['$q', UserService]);
//app.service('localeService', ['$q', LocaleService]);

app.config(function($stateProvider){
    $stateProvider.state('home',
      {
        url: '/',
        templateUrl: 'home.html'
      }
    ).state('users',
      {
        url: '/users',
        templateUrl: 'users.html'
      }
    ).state('locales',
      {
        url: '/locales',
        templateUrl: 'locales.html'
      }
    )
  });
