var app = angular.module('wevativeApp');

app.service('Youtube', function ($http) {

	var getLatestUploadsFromChannel = function () {
		return $http.get('/youtube/channel/latest');
	};

	return {
		getLatestUploadsFromChannel: getLatestUploadsFromChannel
	}
});
