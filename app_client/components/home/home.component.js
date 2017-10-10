var app = angular.module('wevativeApp');

function homeController(ArticlesService) {
	var vm = this;
	
	vm.articleSection = 'home';

	// Get articles that are recommended, these are shown in the homepage (header) carousel
	ArticlesService.getRecommendedArticles().then(function (response) {
		vm.recommendedArticles = response.data;
	}).catch(function (err) {
	});
}

app.component('home', {
	templateUrl: 'components/home/home.component.html',
	controller: homeController,
	controllerAs: 'vm',
	css: 'components/home/home.component.css'
});
