var app = angular.module('wevativeApp');

app.controller('GalleryController', function ($window, GalleriesService, $routeParams, $sce) {
	var vm = this;

	GalleriesService.getSingleGalleryByID($routeParams.galleryID)
		.then(function (response) {
			vm.gallery = response.data;
			vm.images = response.data.images;
			vm.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + vm.gallery.youtubeVideoUrl.split('=')[1]);

		})
		.catch(function (err) {
			console.log(err);
			alert('This gallery could not be loaded, please try again');
		})

});
