var app = angular.module('wevativeApp');

function GalleryCtrl(GalleriesService, $window) {
	var vm = this;
	vm.listedGalleries = [];

	// Get galleries that are recommended, these are shown at the top of the page
	GalleriesService.getRecommendedGalleries().then(function (response) {
		vm.recommendedGalleries = response.data;
	}).catch(function (err) {
	});

	vm.loadGalleries = function (page) {
		// Increment the current page number to get the next page for the records
		$window.localStorage['nextGalleryPage'] = parseInt(page) + 1;

		// Get all Galleries within a section
		GalleriesService.getGalleriesBySection(vm.gallery, page).then(function (response) {
			response.data.results.forEach(function (gallery) {
				vm.listedGalleries.push(gallery);
			});

			// Update the page number to increment the pagination
			// Load More button is hidden if the property 'next' does not exist in the response.data object
			vm.page = response.data.next;
		}).catch(function (err) {
			alert("Could not load galleries");
		});
	};

	/**
	 * @desc
	 * @params
	 * @return
	 * **/
	vm.loadMoreGalleries = function () {
		vm.loadGalleries($window.localStorage['nextGalleryPage']);
	};

	vm.$onInit = function () {
		vm.loadGalleries(1)
	};
}

app.component('gallery', {
	bindings: {
		gallery: '<'
	},
	templateUrl: 'components/gallery/gallery.component.html',
	controller: GalleryCtrl,
	controllerAs: 'vm',
	css: 'components/gallery/gallery.component.css',
});



