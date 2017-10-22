var app = angular.module('wevativeApp');

function homeController(ArticlesService, GalleriesService) {
	var vm = this;

	vm.articleSection = 'home';
	// Store all galleries and articles in the carousel container
	vm.carouselContainer = [];

	// Get articles that are recommended, these are shown in the homepage (header) carousel
	ArticlesService.getRecommendedArticles()
		.then(function (response) {
			response.data.forEach(function (gallery) {
				vm.carouselContainer.push(gallery);
			});
		})
		.catch(function (err) {
		});

	// Get galleries that are recommended, these are shown in the homepage (header) carousel
	GalleriesService.getRecommendedGalleries()
		.then(function (response) {
			response.data.forEach(function (gallery) {
				vm.carouselContainer.push(gallery);
			});
		})
		.catch(function (err) {
			alert('Could not load galleries, please refresh the page');
		});
}

app.component('home', {
	templateUrl: 'components/home/home.component.html',
	controller: homeController,
	controllerAs: 'vm',
	css: 'components/home/home.component.css'
});
