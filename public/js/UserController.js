function UserController($scope, UserFactory){
  $scope.users = UserFactory.userlist;
  console.log($scope.users);
}