const GOOGLE = require('googleapis');
const YOUTUBE = GOOGLE.youtube('v3');

const getChannelUploadID = () => {
	const uploadParams = {
		part: 'contentDetails',
		forUsername: 'TwigaayAndChunkaay',
	};

	// return promise once data is obtained from data source
	return new Promise((resolve, reject) => {
		// Get the channel upload ID
		YOUTUBE.channels.list(uploadParams, (err, response) => {
			if (err) {
				reject(err);
			}
			// Get the upload ID from the response
			// 'Items' from the response will only contain one element in the array
			resolve(response.items[0].contentDetails.relatedPlaylists.uploads);
		});
	});

};
/**
 * @description This function gets the latest upload from a youtube channel
 * @param: object
 * @return: Array
 * **/
module.exports.youtubeChannelInfo = (req, res) => {
	let uploadID;
	let youtubeChannelVideoData = [];
	GOOGLE.options({
		auth: process.env.youtube_api_key
	});

	getChannelUploadID()
		.then((response) => {
			uploadID = response;
			// After obtaining the uploadID, get the playlist items from the Youtube API 
			YOUTUBE.playlistItems.list({
				part: 'snippet',
				playlistId: uploadID,
				maxResults: 5
			}, (err, response) => {
				if (err) {
					console.log(err);
					return res.json({message: "Could not obtain playlist information "}).sendStatus(500);
				}

				// Get the items array within the response and cherry pick required data
				response.items.forEach(videoInformation => {
					console.log(videoInformation);
					youtubeChannelVideoData.push({
						title: videoInformation.snippet.title,
						description: videoInformation.snippet.description,
						image: videoInformation.snippet.thumbnails.high,
						videoID: videoInformation.snippet.resourceId.videoId,
					})
				});

				return res.json(youtubeChannelVideoData).status(200);
			});
		})
		.catch(err => {
			return res.json({message: "Could not obtain channel upload information "}).sendStatus(500);
		});
};
