function HomeController($scope, HomeFactory){
  $scope.locales = HomeFactory.localeList;
  console.log($scope.locales);
}