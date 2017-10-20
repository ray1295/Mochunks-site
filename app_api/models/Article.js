const keystone = require('keystone');
const Types = keystone.Field.Types;

const Article = new keystone.List('Article', {
	map: {name: 'title'},
	singular: 'Article',
	plural: 'Articles',
	autokey: {path: 'slug', from: 'title', unique: true}
});

Article.add({
	title: {type: String, required: true},
	section: {
		type: Types.Select,
		options: 'realtalk, thehub, realscoop, celebreview, events, trending, beingmochunks, instyle, weekmusic, wdwll, askchunks, gallery',
		emptyOption: false
	},
	recommended: {
		type: Boolean,
		default: false,
		note: "Recommended articles are shown in the post carousel in the home page"
	},
	description: {type: Types.Textarea, wysiwyg: true, height: 200},
	content: {type: Types.Html, wysiwyg: true, height: 500},
	firstArticleImage: {
		type: Types.CloudinaryImage,
		note: "The first image is the cover image of the article",
		folder: '/wevative/mochunks'
	},
	secondArticleImage: {type: Types.CloudinaryImage, folder: '/wevative/mochunks'},
	thirdArticleImage: {type: Types.CloudinaryImage, folder: '/wevative/mochunks'},
	youtubeVideoUrl: {
		type: String,
		note: "Ensure all youtube url follow this example: https://www.youtube.com/watch?v=xxxxxxx"
	},
	publishedDate: {type: Date, default: Date.now}
});

Article.defaultColumns = 'title, section, description, publishedDate';
Article.register();

