function loginController($location, auth) {
  const $ctrl = this;
  const redirect = '/dashboard';

  $ctrl.username = '';
  $ctrl.password = '';

  $ctrl.$onInit = ()  => {
    if(auth.isTokenValid()) {
      $location.path(redirect);
    }
  }

  $ctrl.login = () => {
    
    const credentials = {
      username: $ctrl.username,
      password: $ctrl.password
    }

    auth.authenticate(credentials)
      .then((res) => {
        if(res) $location.path(redirect);
      })
      .catch((err) => {
        console.log(err);        
      });
  }
}
angular.module('todoApp.login',
  [
    'todoApp.auth'
  ])
  .component('login', {
    templateUrl: 'src/app/component/login/login.component.html',
    controller:   loginController
  })