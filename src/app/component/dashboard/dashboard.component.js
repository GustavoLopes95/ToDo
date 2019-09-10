function dashboardController($scope, pagerService, userService) {
  var $ctrl = this;

	$ctrl.pager = {};
	$ctrl.setPage = setPage;

	initController();

	function initController() {
		// initialize to page 1
		$ctrl.setPage(1);
	}

	async function setPage(page) {
		if (page < 1 || page > $ctrl.pager.totalPages) {
			return;
		}

    const gridData = await getData(page);
    if(gridData.length == 0) return false;

    const paginationData = gridData.meta.pagination;
    delete gridData.meta.pagination;

		// get pager object from service
		$ctrl.pager = pagerService.createPager(paginationData);

		// get current page of items
    $ctrl.data = gridData;
    $scope.$apply();
  }

  async function getData(page) {
    return await userService.get(`?page=${page}`);
  }
}
angular.module('todoApp.dashboard', [
    'todoApp.taskColumn',
    'todoApp.pager',
    'todoApp.user.service'
])
.component('dashboard', {
  templateUrl: 'src/app/component/dashboard/dashboard.component.html',
  controller: dashboardController
});
