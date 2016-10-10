function UserService($q){
  var users = [
    {
      name: 'Justin Jonsson',
      content: 'Growler or Ulysses'
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

  // Promise-based API
  return {
    loadAllUsers : function() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    }
  };
}