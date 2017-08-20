var app = angular.module('mochunksApp');

function floatBelowController() {
    var vm = this;
}

app.component('mochunksFloatBelow', {
    templateUrl: 'components/floatBelow/floatBelow.component.html',
    controller: floatBelowController,
    controllerAs: 'vm'
});

