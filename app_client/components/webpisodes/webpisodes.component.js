var app = angular.module('mochunksApp');

function webpisodesController() {
    var vm = this;
}

app.component('mochunksWebpisodes', {
    templateUrl: 'components/webpisodes/webpisodes.component.html',
    controller: webpisodesController,
    controllerAs: 'vm'
});

