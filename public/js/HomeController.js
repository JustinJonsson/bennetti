function HomeController($scope, HomeFactory){
  $scope.locales = HomeFactory.localeList;

  function sumChecks(which){
    return $scope.locales.reduce(function(sum, b){
      //console.log("Sum: ", sum, " Checking for: ", which, " Got: ", b[which]);
      return (b[which] == true ? sum + 1 : sum);
    },0);
  }

  $scope.checkuncheck = function(locale, clicked){
    var sum = sumChecks(clicked);
    console.log("SUM was: ", sum);
    console.log(locale);
    if(clicked == "like") {
      locale.donotlike = false;
    } else if(clicked == "donotlike"){
      var unliked = sumChecks(clicked);
      locale.like = false;
    }
    console.log(locale);
  };
}