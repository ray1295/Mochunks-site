var app = angular.module('mochunksApp');

app.service('Youtube', function ($http) {

	var getLatestUploadsFromChannel = function () {
		return $http.get('/youtube/channel/latest');
	};

	return {
		getLatestUploadsFromChannel: getLatestUploadsFromChannel
	}
});
