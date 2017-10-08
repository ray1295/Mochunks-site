var app = angular.module('wevativeApp');

app.service('GalleriesService', function ($http) {
	var getAllGalleries = function (page) {
		return $http.get('galleries/' + page);
	};

	var getGalleriesBySection = function (section) {
		return $http.get('galleries/' + section);
	};

	var getSingleGalleryByID = function (galleryID) {
		return $http.get('gallery/' + galleryID);
	};

	var getRecommendedGalleries = function() {
		return $http.get('galleries/view/recommended');
	};

	var getLatestGalleryForSection = function(section) {
		return $http.get('gallery/view/latest/' + section);
	};

	return {
		getAllGalleries: getAllGalleries,
		getGalleriesBySection: getGalleriesBySection,
		getSingleGalleryByID: getSingleGalleryByID,
		getRecommendedGalleries: getRecommendedGalleries,
		getLatestArticleForSection: getLatestGalleryForSection
	}
});

