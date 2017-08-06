var app = angular.module('mochunksApp');

function advertsController() {
    var vm = this;
}

app.component('advertMo', {
    templateUrl: 'components/adverts/advert.component.html',
    controller: advertsController,
    controllerAs: 'vm'
});

