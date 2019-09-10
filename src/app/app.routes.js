app.config(
  function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      template: '<login></login>'
    })
    .when('/dashboard', {
      template: '<dashboard></dashboard>'
    })

    $locationProvider.html5Mode(true);
  });