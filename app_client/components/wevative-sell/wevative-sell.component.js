var app = angular.module('wevativeApp');

function advertController() {
    var vm = this;
}

app.component('advert', {
    templateUrl: 'components/wevative-sell/wevative-sell.component.html',
    controller: advertController,
    controllerAs: 'vm',
	css: 'components/wevative-sell/wevative-sell.component.css'
});


