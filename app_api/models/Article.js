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
	description: {type: Types.Html, wysiwyg: true, height: 300},
	image: {type: Types.CloudinaryImage},
	publishedDate: {type: Date, default: Date.now}
});

Article.defaultColumns = 'title, description, publishedDate';
Article.register();

