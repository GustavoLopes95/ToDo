angular.module('todoApp.pager', [])
.factory('pagerService', function() {
  const pagerService = {};

  pagerService.createPager = ({
    total,
    per_page,
    current_page,
    total_pages
  }) => {

    const pagination = Array.from(Array(total_pages), (x, i) => i + 1);

    return {
      totalItems: total,
			currentPage: current_page,
			pageSize: per_page,
			totalPages: total_pages,
			startPage: 1,
			endPage: total_pages,
			startIndex: 1,
			endIndex: total_pages,
			pages: pagination
    }
  }


  return pagerService;
})