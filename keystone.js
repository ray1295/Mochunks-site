// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
const keystone = require('keystone');
const handlebars = require('express-handlebars');

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
		extname: '.hbs'
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'
});

if (process.env.NODE_ENV === "production") {
	console.log('should not be here');
	// Set mongodb url
	keystone.set('mongo', process.env.production_database);
	// Cloudinary configuration
	keystone.set('cloudinary config', process.env.production_cloudinary_url);

	keystone.set('cloudinary folders', true);
} else {
	keystone.set('cloudinary config', process.env.development_cloudinary_url);
	keystone.set('mongo', process.env.development_database);
}

// Load your project's Models
keystone.import('./app_api/models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// inform keystone of the routes that the app will be utilising
keystone.set('routes', require('./app_api/routes'));

// Start Keystone to connect to your database and initialise the web server
keystone.start();
