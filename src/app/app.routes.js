app.config(
  function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      template: '<dashboard></dashboard>'
    })

    $locationProvider.html5Mode(true);
  });