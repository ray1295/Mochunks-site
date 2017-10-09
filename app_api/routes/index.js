const keystone = require('keystone');
const express = require('express');
const router = express.Router();
const ArticlesCtrl = require('../controllers/articles');
const Gallery = require('../controllers/galleries');
const YOUTUBE = require('../controllers/external/youtube');

router.get('/articles/view/recommended', ArticlesCtrl.getRecommendedArticles);
router.get('/articles/:page', ArticlesCtrl.getAllArticles);
router.get('/articles/:section/:page', ArticlesCtrl.getAllArticlesForSection);
router.get('/article/:articleID', ArticlesCtrl.getSingleArticleByID);
router.get('/article/view/latest/:section', ArticlesCtrl.getLatestArticleForSection);

router.get('/galleries/view/recommended', Gallery.getRecommendedGalleries);
router.get('/galleries/:section/:page', Gallery.getGalleriesSection);
router.get('/galleries/:page', Gallery.getAllGalleries);
router.get('/gallery/:articleID', Gallery.getSingleGalleryByID);
router.get('/gallery/view/latest/:section', Gallery.getLatestGalleryForSection);

router.get('/youtube/channel/latest', YOUTUBE.youtubeChannelInfo);

module.exports = router;
