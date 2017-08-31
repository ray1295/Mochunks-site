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
	section: {type: Types.Select, options: 'instyle,', emptyOption: false},
	recommended: {type: Boolean, default: false, note : "Recommended gallery are shown in the top of a gallery page"},
	caption: {type: Types.Textarea, wysiwyg: true, height: 200},
	content: {type: Types.Markdown, wysiwyg: false, height: 500},
	firstGalleryImage: {type: Types.CloudinaryImage, note: "This is shown as the cover for this gallery"},
	secondGalleryImage: {type: Types.CloudinaryImage},
	thirdGalleryImage: {type: Types.CloudinaryImage},
	fourthGalleryImage: {type: Types.CloudinaryImage},
	fifthGalleryImage: {type: Types.CloudinaryImage},
	sixthGalleryImage: {type: Types.CloudinaryImage},
	seventhGalleryImage: {type: Types.CloudinaryImage},
	eightGalleryImage: {type: Types.CloudinaryImage},
	ninthGalleryImage: {type: Types.CloudinaryImage},
	tenthGalleryImage: {type: Types.CloudinaryImage},
	youtubeVideoUrl: {type: String},
	publishedDate: {type: Date, default: Date.now}
});

Gallery.defaultColumns = 'title, section, caption, publishedDate';
Gallery.register();

