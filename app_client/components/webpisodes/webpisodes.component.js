var app = angular.module('mochunksApp');

function webpisodesController(Youtube, $sce) {
	var vm = this;

	/**
	 * @description Get latest channel video upload(5) from the server
	 **/
	Youtube.getLatestUploadsFromChannel()
		.then(function (response) {
			vm.otherChannelVideos = [];
			response.data.forEach(function (video, index) {
				video.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + video.videoID);
				if (index !== 0) vm.otherChannelVideos.push(video);
			});
			vm.latestChannelVideo = response.data[0];
		})
		.catch(function (err) {
			console.log(err);
		});
}

app.component('mochunksWebpisodes', {
	templateUrl: 'components/webpisodes/webpisodes.component.html',
	controller: webpisodesController,
	controllerAs: 'vm',
	css: 'components/webpisodes/webpisodes.component.css'
});

