var app = angular.module('mochunksApp');

app.controller('InStyleController', function (GalleriesService) {
	var vm = this;
	
	// Get all Galleries within a section
	GalleriesService.getGalleriesBySection('instyle').then(function (response) {
		vm.galleries = response.data;
	}).catch(function (err) {
		alert("Could not load articles");
	});

	// Get galleries that are recommended, these are shown at the top of instyle page
	GalleriesService.getRecommendedGalleries().then(function (response) {
		vm.recommendedGalleries = response.data;
	}).catch(function (err) {
	});


});



