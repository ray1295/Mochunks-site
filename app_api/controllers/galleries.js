const keystone = require('keystone');

// Get all Galleries by section
module.exports.getGalleriesSection = (req, res) => {
	let section = req.params.section;
	keystone.list('Gallery').model.find({section: section}).sort('-publishedDate').then(galleries => {
		if (galleries.length > 0) res.json(galleries).status(200);
		// else return not found status
		return res.sendStatus(404);
	}, (err) => res.sendStatus(500));
};
