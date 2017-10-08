var app = angular.module('wevativeApp');

function articleListingController(ArticlesService) {
	var vm = this;
	vm.page = 1; // Set the pagination page to 1

	ArticlesService.getAllArticles(vm.page).then(function (response) {
		vm.listedArticles = [];
		response.data.results.forEach(function(article) {
			vm.listedArticles.push(article);
		});
		
		// Update the page number to increment the pagination
		vm.page = response.data.next;
	}).catch(function (err) {
		
	});
}

app.component('articles', {
	templateUrl: 'components/homeArticleListing/homeArticleListing.view.html',
	controller: articleListingController,
	controllerAs: 'vm',
	css: 'components/homeArticleListing/homeArticleListing.component.css'
});

