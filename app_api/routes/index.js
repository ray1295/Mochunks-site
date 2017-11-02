const keystone = require('keystone');
const express = require('express');
const router = express.Router();
const ArticlesCtrl = require('../controllers/articles');
const Gallery = require('../controllers/galleries');
const YOUTUBE = require('../controllers/external/youtube');
const EMAILCTRL = require('../controllers/email.controller');
const path = require('path');


router.get('/articles/view/recommended', ArticlesCtrl.getRecommendedArticles);
router.get('/articles/:page', ArticlesCtrl.getAllArticles);
router.get('/articles/:section/:page', ArticlesCtrl.getAllArticlesForSection);
router.get('/article/:slug', ArticlesCtrl.getSingleArticleBySlug);
router.get('/article/view/latest/:section', ArticlesCtrl.getLatestArticleForSection);

router.get('/galleries/view/recommended', Gallery.getRecommendedGalleries);
router.get('/galleries/:section/:page', Gallery.getGalleriesSection);
router.get('/galleries/:page', Gallery.getAllGalleries);
router.get('/gallery/:slug', Gallery.getSingleGalleryBySlug);
router.get('/gallery/view/latest/:section', Gallery.getLatestGalleryForSection);

router.get('/youtube/channel/latest', YOUTUBE.youtubeChannelInfo);

router.post('/send-email', EMAILCTRL.sendEmail);

router.use((req, res) => res.sendFile(path.join(__dirname, '../../app_client', 'index.html')));

module.exports = router;
