// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Mochunks',
	'brand': 'Mochunks',

	'less': 'public',
	'static': 'app_client',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Connect to database
if (process.env.NODE_ENV === "production") keystone.set('mongo', process.env.MONGO_URI);

// Load your project's Models
keystone.import('./app_api/models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('./app_api/routes'));

// Cloudinary configuration
keystone.set('cloudinary config', { cloud_name: 'my-cloud', api_key: 'abc', api_secret: '123' });
// or
keystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );

// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', 'keystone');

// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);

// // optional, will force cloudinary to serve images over https
// keystone.set('cloudinary secure', true);

// Start Keystone to connect to your database and initialise the web server


keystone.start();
