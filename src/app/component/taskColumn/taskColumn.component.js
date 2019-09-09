function taskColumnController($scope, $window) {
  var $ctrl = this;
  $ctrl.$onInit = function () {
    $scope.title  = $ctrl.data.title;
    $ctrl.cards   = $ctrl.data.cards;
  }
}
angular.module('todoApp.taskColumn', [
  'todoApp.taskCard'
])
.component('taskColumn', {
  bindings: {
    data: '<'
  },
  templateUrl: 'src/app/component/taskColumn/taskColumn.component.html',
  controller: taskColumnController
});