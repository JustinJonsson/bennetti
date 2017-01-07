function HomeController($scope, HomeService){
  $scope.locales = HomeService.localeList;
  console.log($scope.users);
}