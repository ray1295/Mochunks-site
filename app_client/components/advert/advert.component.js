var app = angular.module('wevativeApp');

function advertController() {
    var vm = this;
}

app.component('advert', {
    templateUrl: 'components/advert/advert.component.html',
    controller: advertController,
    controllerAs: 'vm',
	css: 'components/advert/advert.component.css'
});


