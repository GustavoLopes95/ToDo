function taskColumnController($scope, $window) {
  const $ctrl = this;
  $ctrl.$onInit = function () {
    $scope.title   = $ctrl.data.title;
    $scope.cards   = $window.angular.copy($ctrl.data.cards);
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