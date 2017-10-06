var app = angular.module('mochunksApp');

function galleryController() {
	var vm = this;
}

app.component('gallery', {
	templateUrl: 'components/gallery/gallery.component.html',
	controller: galleryController,
	controllerAs: 'vm'
});

