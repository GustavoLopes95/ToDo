const app = angular.module('todoApp',
  [
    'ngRoute', 
    'todoApp.dashboard',
    'todoApp.login',
  ]);

app.component('app', {
  template: '<div ng-view></div>',
});