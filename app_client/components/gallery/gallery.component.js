var app = angular.module('wevativeApp');

function galleryController() {
	var vm = this;
}

app.component('gallery', {
	templateUrl: 'components/gallery/gallery.component.html',
	controller: galleryController,
	controllerAs: 'vm',
	css: 'components/gallery/gallery.components.css'
});

