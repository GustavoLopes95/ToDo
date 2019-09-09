function dashboardController($scope) {
  $scope.taskColumns =
  [
    new TaskColumn({
      title: 'A fazer',
      cards: [
        new Card({
          title: 'Ipsum is simply dummy',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        }),
        new Card({
          title: 'the printing and ',
          description: 'Lorem Ipsum is simply dummy text of the printing'
        })
      ]
    })
  ];
}
angular.module('todoApp.dashboard',
  [
    'todoApp.taskColumn',
  ])
  .component('dashboard', {
    templateUrl: 'src/app/component/dashboard/dashboard.component.html',
    controller: dashboardController
  });
