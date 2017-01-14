function HomeFactory($http){
  var locales = {};

  $http.post("http://corvidian.com:3001/", {action : 'home'}).success(function(response){
      console.log("success ", response);
      locales.localeList = response;
    }).error(function(response){
      console.log("error ", response);
    });

  /*locales.localeList = [
    {
      name: 'Growler',
      like: true,
      donotlike: false
    },
    {
      name: 'Ulysses',
      like: true,
      donotlike: false
    },
    {
      name: 'GoGo',
      like: false,
      donotlike: true
    },
    {
      name: 'Flavors',
      like: false,
      donotlike: true
    },
    {
      name: 'Chopt',
      like: true,
      donotlike: false
    },
    {
      name: 'Naya Express',
      like: true,
      donotlike: false
    },
    {
      name: 'Dig Inn',
      like: false,
      donotlike: true
    },
    {
      name: 'Lenwich',
      like: false,
      donotlike: false
    }
  ];*/

  return locales;
}