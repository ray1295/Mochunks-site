var app = angular.module('mochunksApp');

function homeController(ArticlesService) {
	var vm = this;

	ArticlesService.getRecommendedArticles().then(function (response) {
		vm.recommendedArticles = response.data;
	}).catch(function (err) {
	});
}

app.component('mochunksHome', {
	templateUrl: 'components/home/home.component.html',
	controller: homeController,
	controllerAs: 'vm'
});
