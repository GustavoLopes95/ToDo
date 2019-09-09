function taskCardController($scope) {
  const $ctrl = this;
  $ctrl.$onInit = function () {
    $scope.title        = $ctrl.card.title;
    $scope.description  = $ctrl.card.description;
  }

  $scope.drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

}

angular.module('todoApp.taskCard',[])
  .component('taskCard', {
    bindings: {
      card: '<'
    },
    templateUrl: 'src/app/component/card/card.component.html',
    controller: taskCardController
  });