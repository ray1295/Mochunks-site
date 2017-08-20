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
	section: {type: String},
	content: {type: Types.Html, wysiwyg:true, height:500},
	description: {type: Types.Html, wysiwyg: true, height: 200},
	image: {type: Types.CloudinaryImage},
	youtubeVideoUrl: {type:String}, 
	publishedDate: {type: Date, default: Date.now},
});

Article.defaultColumns = 'title, section, description, publishedDate';
Article.register();

