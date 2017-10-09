var app = angular.module('wevativeApp');

app.controller('HubController', function (ArticlesService) {
	var vm = this;
	vm.articleSection = 'thehub';
});
