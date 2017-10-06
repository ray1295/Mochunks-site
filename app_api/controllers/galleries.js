const keystone = require('keystone');

// Get all articles stored in the records (pagination implemented)
module.exports.getAllGalleries = (req, res) => {
	keystone.list('Gallery').paginate({
		page: req.params.page || 1,
		perPage: 6,
		// maxPages: 6
	}).sort('-publishedDate').exec((err, results) => {
		if (err) {
			// TODO: Log errors
			return res.sendStatus(500);
		}
		return res.json(results).status(200);
	});
};

// Get all Galleries by section
module.exports.getGalleriesSection = (req, res) => {
	let section = req.params.section;
	keystone.list('Gallery').model.find({section: section}).sort('-publishedDate').then(galleries => {
		if (galleries.length > 0) res.json(galleries).status(200);
		// else return not found status
		return res.sendStatus(404);
	}, (err) => res.sendStatus(500));
};


// Get single article by ID
module.exports.getSingleGalleryByID = (req, res) => {
	let galleryID = req.params.galleryID;
	keystone.list('Gallery').model.findById(galleryID).then((gallery) => {
		return res.json(gallery).status(200);
	}, (err) => {
		// TODO: Log errors
		return res.sendStatus(500)
	});
};

// Get recommended articles
module.exports.getRecommendedGalleries = (req, res) => {
	keystone.list('Gallery').model.find().where('recommended', true).sort('-publishedDate').then((galleries) => {
		return res.json(galleries).status(200);
	}, (err) => {
		// TODO: Log errors
		return res.sendStatus(500)
	});
};

// Get the latest article within a section
module.exports.getLatestGalleryForSection = (req, res) => {
	keystone.list('Gallery').model.findOne().where({section: req.params.section}).sort('-publishedDate').then((galleries) => {
		return res.json(galleries).status(200);
	}, (err) => {
		// TODO: Log errors
		return res.sendStatus(500)
	});
};

