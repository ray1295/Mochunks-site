var app = angular.module('wevativeApp');

app.service('EmailService', function ($http) {

	var sendEmail = function (body) {
		return $http.post('/send-email', body);
	};

	return {
		sendEmail: sendEmail
	}
});
