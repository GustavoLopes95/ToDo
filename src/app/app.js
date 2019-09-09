const app = angular.module('todoApp',
  [
    'ngRoute', 
    'todoApp.dashboard',
  ]);

app.component('app', {
  template: '<div ng-view></div>',
});