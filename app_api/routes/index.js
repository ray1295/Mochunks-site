const keystone = require('keystone');
const express = require('express');
const router = express.Router();
const ArticlesCtrl = require('../controllers/articles');
const Gallery = require('../controllers/galleries');

router.get('/articles/:page', ArticlesCtrl.getAllArticles);
router.get('/articles/:section', ArticlesCtrl.getAllArticlesForSection);
router.get('/article/:articleID', ArticlesCtrl.getSingleArticleByID);
router.get('/articles/view/recommended', ArticlesCtrl.getRecommendedArticles);
router.get('/article/view/latest/:section', ArticlesCtrl.getLatestArticleForSection);

router.get('/galleries/:page', Gallery.getAllGalleries);
router.get('/galleries/:section', Gallery.getGalleriesSection);
router.get('/gallery/:articleID', Gallery.getSingleGalleryByID);
router.get('/galleries/view/recommended', Gallery.getRecommendedGalleries);
router.get('/gallery/view/latest/:section', Gallery.getLatestGalleryForSection);

module.exports = router;
