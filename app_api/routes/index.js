const keystone = require('keystone');
const express = require('express');
const router = express.Router();
const ArticlesCtrl = require('../controllers/articles');

router.get('/articles', ArticlesCtrl.getAllArticles);
router.get('/articles/:section', ArticlesCtrl.getAllArticlesSection);
router.get('/articles/:articleID', ArticlesCtrl.getSingleArticleByID);

module.exports = router;
