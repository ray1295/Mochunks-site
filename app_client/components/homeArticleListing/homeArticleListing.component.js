var app = angular.module('wevativeApp');

function ArticleListingController(ArticlesService, $window) {
	var vm = this;
	vm.listedArticles = [];

	vm.loadArticles = function (page) {

		var articleSection = (vm.section === 'home') ? ArticlesService.getAllArticles() : ArticlesService.getArticlesBySection(vm.section, page);

		// Increment the current page number to get the next page for the records
		$window.localStorage['nextPage'] = parseInt(page) + 1;

		articleSection
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

	/**
	 * @desc
	 * @params
	 * @return
	 *
	 * **/
	vm.$onInit = function () {
		// Initialise the article listing when the page is loaded, start from page 1
		vm.loadArticles(1);
	};

}

app.component('articles', {
	templateUrl: 'components/homeArticleListing/homeArticleListing.view.html',
	controller: ArticleListingController,
	bindings: {
		section: '<'
	}, controllerAs: 'vm',
	css: 'components/homeArticleListing/homeArticleListing.component.css'
});

