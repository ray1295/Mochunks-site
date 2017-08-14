const keystone = require('keystone');


exports = module.exports = function (req, res) {
	keystone.list('Article').model.find()
		.then((products => {
			console.log(products);
			return res.json(products).status(200);
		}).catch(err => {
			console.log(err);
			return res.sendStatus(500);
		}));
};
 
