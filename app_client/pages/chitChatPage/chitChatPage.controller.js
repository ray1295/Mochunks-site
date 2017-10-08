var app = angular.module('wevativeApp');

app.controller('ChitChatController', function (ArticlesService, $window) {
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
		ArticlesService.getArticlesBySection('chitchat', $window.localStorage['nextPage'])
			.then(function (response) {
				console.log(response);
				vm.articles = response.data;
				response.data.forEach(function (article) {
					vm.listedArticles.push(article);
				});

				// Update the page number to increment the pagination
				// Load More button is hidden if the property 'next' does not exist in the response.data object
				vm.page = response.data.next;
			})
			.catch(function (err) {
				console.log(err);
				alert("Could not load articles");
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

});



