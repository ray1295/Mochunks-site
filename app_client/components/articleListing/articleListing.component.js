var app = angular.module('mochunksApp');

function articleListingController() {
	var vm = this;
}

app.component('mochunksArticles', {
	templateUrl: 'components/articleListing/articleListing.view.html',
	controller: articleListingController,
	controllerAs: 'vm'
});

