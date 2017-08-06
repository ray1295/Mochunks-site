var app = angular.module('mochunksApp');

function floatBelowController() {
    var vm = this;
}

app.component('floatBelow', {
    templateUrl: 'components/floatBelow/floatBelow.component.html',
    controller: floatBelowController,
    controllerAs: 'vm'
});

