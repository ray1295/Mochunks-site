var app = angular.module('wevativeApp');

app.controller('ContactPageController', function ($rootScope, EmailService, $sanitize) {
	var vm = this;

	// Hide Navigation bar on mobile once page is loaded
	// TODO: Look for efficient solution to close the navigation bar on each page
	$rootScope.showMenu = false;

	/**
	 * @desc
	 * **/
	vm.sendContactUsEmail = function () {
		console.log(vm.message);
		// Sanitise all the inputs from the form
		for (var key in vm.message) {
			if (vm.message.hasOwnProperty(key)) {
				vm.message[key] = $sanitize(vm.message[key]);
			}
		}
		
		vm.message.section = 'Contact-us';

		EmailService.sendEmail(vm.message)
			.then(function (response) {
				vm.message = {};
				alert('We have received your message and will be in touch shortly, thanks');
			})
			.catch(function (err) {
				alert('Please resend your message again');
			});
	};


});
