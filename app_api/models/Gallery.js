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
	recommended: {type: Boolean, default: false, note: "Recommended gallery are shown in the top of a gallery page"},
	caption: {type: Types.Textarea, wysiwyg: true, height: 200},
	content: {type: Types.Markdown, wysiwyg: false, height: 500},
	firstImage: {type: Types.CloudinaryImage, note: "This is shown as the cover for this gallery"},
	secondImage: {type: Types.CloudinaryImage},
	thirdImage: {type: Types.CloudinaryImage},
	fourthImage: {type: Types.CloudinaryImage},
	fifthImage: {type: Types.CloudinaryImage},
	sixthImage: {type: Types.CloudinaryImage},
	seventhImage: {type: Types.CloudinaryImage},
	eightImage: {type: Types.CloudinaryImage},
	ninthImage: {type: Types.CloudinaryImage},
	tenthImage: {type: Types.CloudinaryImage},
	youtubeVideoUrl: {type: String},
	publishedDate: {type: Date, default: Date.now}
});

Gallery.defaultColumns = 'title, section, caption, publishedDate';
Gallery.register();

