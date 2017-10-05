var app = angular.module('mochunksApp');

function articleListingController(ArticlesService, $window) {
	var vm = this;
	vm.listedArticles = [];

	/**
	 * @desc
	 * @params
	 * @return
	 * **/
	vm.loadArticles = function (page) {
		// Increment the current page number to get the next page for the records
		$window.localStorage['nextPage'] = parseInt(page) + 1;
		ArticlesService.getAllArticles(page)
			.then(function (response) {
				response.data.results.forEach(function (article) {
					vm.listedArticles.push(article);
				});

				// Update the page number to increment the pagination
				// Load More button is hidden if the property 'next' does not exist in the response.data object
				vm.page = response.data.next;
			})
			.catch(function (err) {

			});
	};

	/**
	 * @desc
	 * @params
	 * @return
	 * **/
	vm.loadMoreArticles = function () {
		vm.loadArticles($window.localStorage['nextPage']);
	};

	// Initialise the article listing when the page is loaded, start from page 1
	vm.loadArticles(1);
}

app.component('mochunksArticles', {
	templateUrl: 'components/homeArticleListing/homeArticleListing.view.html',
	controller: articleListingController,
	controllerAs: 'vm'
});

