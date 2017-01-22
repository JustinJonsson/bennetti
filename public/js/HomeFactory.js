function HomeFactory($http){
  var locales = {};

/*  locales.asyncInit = function(){
    var postPromise = $http.post("http://corvidian.com:3001/", {action : 'home'}).success(function(response){
      // still not 100% sure why this works. See
      // http://plnkr.co/edit/TTlbSv?p=preview and
      // http://stackoverflow.com/questions/12505760/processing-http-response-in-service
      console.log("http response", response);
      console.log("http response.data", response.data);
      console.log("locales.localeList", locales.localeList);
    }).error(function(response){
      console.log("error ", response);
    });

    console.log("postPromise ", postPromise);
    return postPromise;
  }*/

  locales.asyncInit = function(){
    var postPromise = $http.post("http://corvidian.com:3001/", {action : 'home'}).then(function(response){
      console.log("http response", response);
      console.log("http response.data", response.data);
      return response.data;
    }, function(response){
      console.log("error ", response);
    });

    console.log("postPromise ", postPromise);
    return postPromise;
  }

/*  console.log('factory locales', locales);
  console.log('factory locale.localeList', locales.localeList);*/

/*
  locales.localeList = [
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
  ];
*/

  return locales;
}
