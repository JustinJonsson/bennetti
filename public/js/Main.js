var app = angular.module('bennetti', [ 'ngMaterial', 'ui.router' ]);

/*app.controller('MainController', [
    'userService', '$mdSidenav', '$mdBottomSheet', '$log',
  MainController
]);*/

/*app.controller('UserController', [
  'userService', '$mdSidenav', '$mdBottomSheet', '$log',
  UserControllerold
]);*/

app.controller('UserController', ['$scope', 'UserFactory', function ($scope, UserFactory){
  $scope.users = UserFactory.userlist;
  console.log($scope.users);
}]);

//app.service('userService', ['$q', UserService]);
app.factory('UserFactory', function (){
  var Users = {};

  Users.userlist = [
    {
      name: 'Justin Jonsson',
      content: 'Growler'
    },
    {
      name: 'Clayton Swindoll',
      content: 'GoGo Grill'
    },
    {
      name: 'Raphael Kumar',
      content: 'Tajin'
    },
    {
      name: 'Katie Shields',
      content: 'Chopt'
    }
  ];

  return Users;
});

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
