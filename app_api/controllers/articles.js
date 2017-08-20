const keystone = require('keystone');

// Get all articles stored in the records
module.exports.getAllArticles = (req, res) => {
	keystone.list('Article').model.find().then((articles => {
		return res.json(articles).status(200);
	}));
};

// Get all articles by section
module.exports.getAllArticlesSection = (req, res) => {
	let section = req.params.section;
	keystone.list('Article').model.find({section: section}).then(articles => {
		if (articles.length > 0) res.json(articles).status(200);
		return res.sendStatus(400)
	});
};
