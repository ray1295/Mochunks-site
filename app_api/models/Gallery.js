const keystone = require('keystone');
const Types = keystone.Field.Types;

const Gallery = new keystone.List('Gallery', {
	map: {name: 'title'},
	singular: 'Gallery',
	plural: 'Galleries',
	autokey: {path: 'slug', from: 'title', unique: true}
});

Gallery.add({
	title: {type: String, required: true},
	section: {
		type: Types.Select,
		options: 'instyle, lookbook',
		emptyOption: false
	},
	recommended: {
		type: Boolean,
		default: false,
		note: "Recommended gallery are shown in the top of a gallery page and on the main page carousel"
	},
	caption: {type: Types.Html, wysiwyg: true, height: 200},
	content: {type: Types.Html, wysiwyg: true, height: 500},
	images: {
		type: Types.CloudinaryImages,
		note: "This first image is used as the cover for this gallery. Uploading a large number of images might delay the saving process.",
		folder: '/wevative/mochunks'
	},
	youtubeVideoUrl: {
		type: String,
		note: "Ensure all youtube url follow this example: https://www.youtube.com/watch?v=fUtlqtdn1Xo"
	},
	state: {type: Types.Select, options: 'draft, published, archived', default: 'published'},
	publishedDate: {type: Date, default: Date.now}
});

Gallery.defaultColumns = 'title, section, caption, publishedDate';
Gallery.register();

