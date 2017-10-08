var app = angular.module('wevativeApp');

function realTalkController() {
	var vm = this;
}

app.component('realTalk', {
	templateUrl: 'components/realTalk/realTalk.component.html',
	controller: realTalkController,
	controllerAs: 'vm',
	css: 'components/realTalk/realTalk.component.css'
});
