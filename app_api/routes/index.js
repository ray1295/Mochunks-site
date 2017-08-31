const keystone = require('keystone');
const express = require('express');
const router = express.Router();
const ArticlesCtrl = require('../controllers/articles');
const Gallery = require('../controllers/galleries');

router.get('/articles', ArticlesCtrl.getAllArticles);
router.get('/articles/:section', ArticlesCtrl.getAllArticlesSection);
router.get('/article/:articleID', ArticlesCtrl.getSingleArticleByID);
router.get('/articles/view/recommended/', ArticlesCtrl.getRecommendedArticles);

router.get('/gallery/:section', Gallery.getGalleriesSection);

module.exports = router;
