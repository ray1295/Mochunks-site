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
		options: 'realtalk, thehub, realscoop, celebreview, events, trending, beingchunks, instyle, weekmusic, wdwll, askchunks, gallery',
		emptyOption: false
	},
	recommended: {
		type: Boolean,
		default: false,
		note: "Recommended articles are shown in the post carousel in the home page"
	},
	description: {type: Types.Textarea, wysiwyg: true, height: 200},
	content: {type: Types.Html, wysiwyg: true, height: 500},
	firstArticleImage: {type: Types.CloudinaryImage, note: "The first image is the cover image of the article"},
	secondArticleImage: {type: Types.CloudinaryImage},
	thirdArticleImage: {type: Types.CloudinaryImage},
	youtubeVideoUrl: {type: String},
	publishedDate: {type: Date, default: Date.now}
});

Article.defaultColumns = 'title, section, description, publishedDate';
Article.register();

