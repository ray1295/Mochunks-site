const keystone = require('keystone');

/**
 * @desc
 * @params
 * @return
 * **/
// Get all articles stored in the records (pagination implemented)
module.exports.getAllArticles = (req, res) => {
	keystone.list('Article')
		.paginate({
			page: req.params.page || 1,
			perPage: 6
		})
		.sort('-publishedDate')
		.exec((err, articles) => {
			if (err) {
				return res.sendStatus(500);
			}
			return res.json(articles).status(200);
		});
};

/**
 * @desc
 * @params
 * @return
 * **/
// Get all articles by section
module.exports.getAllArticlesForSection = (req, res) => {
	let section = req.params.section;
	keystone.list('Article')
		.paginate({
			page: req.params.page || 1,
			perPage: 6
		})
		.where({section: section})
		.sort('-publishedDate')
		.exec((err, articles) => {
			if (err) {
				return res.sendStatus(500);
			}
			return res.json(articles).status(200);
		});
};

/**
 * @desc
 * @params
 * @return
 * **/
// Get single article by Slug
module.exports.getSingleArticleBySlug = (req, res) => {
	const SLUG = req.params.slug;
	keystone.list('Article').model.findOne({slug: SLUG})
		.then((article) => {
			return res.json(article).status(200);
		}, (err) => {
			// TODO: Log errors
			return res.sendStatus(500);
		});
};

/**
 * @desc
 * @params
 * @return
 * **/
// Get recommended articles
module.exports.getRecommendedArticles = (req, res) => {
	keystone.list('Article')
		.model.find()
		.where('recommended', true)
		.sort('-publishedDate')
		.then((articles) => res.json(articles).status(200))
		.catch(err => {
			// TODO: Log errors
			return res.sendStatus(500);
		});
};

/**
 * @desc
 * @params
 * @return
 * **/
// Get the latest article within a section
module.exports.getLatestArticleForSection = (req, res) => {
	keystone.list('Article')
		.model.findOne()
		.where({section: req.params.section})
		.sort('-publishedDate')
		.then((articles) => {
			return res.json(articles).status(200);
		}, (err) => {
			// TODO: Log errors
			return res.sendStatus(500);
		});
};
