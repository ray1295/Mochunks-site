const keystone = require('keystone');

// Get all articles stored in the records (pagination implemented)
module.exports.getAllArticles = (req, res) => {
	keystone.list('Article').paginate({
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

// Get all articles by section
module.exports.getAllArticlesForSection = (req, res) => {
	let section = req.params.section;
	keystone.list('Article').model.find({section: section}).sort('-publishedDate').then(articles => {
		if (articles.length > 0) res.json(articles).status(200);
		return res.sendStatus(400);
	});
};

// Get single article by ID
module.exports.getSingleArticleByID = (req, res) => {
	let articleID = req.params.articleID;
	keystone.list('Article').model.findById(articleID).then((article) => {
		return res.json(article).status(200);
	}, (err) => {
		// TODO: Log errors
		return res.sendStatus(500);
	});
};

// Get recommended articles
module.exports.getRecommendedArticles = (req, res) => {
	keystone.list('Article').model.find().where('recommended', true).sort('-publishedDate').then((articles) => {
		return res.json(articles).status(200);
	}, (err) => {
		// TODO: Log errors
		return res.sendStatus(500);
	});
};

// Get the latest article within a section
module.exports.getLatestArticleForSection = (req, res) => {
	keystone.list('Article').model.findOne().where({section: req.params.section}).sort('-publishedDate').then((articles) => {
		return res.json(articles).status(200);
	}, (err) => {
		// TODO: Log errors
		return res.sendStatus(500);
	});
};

