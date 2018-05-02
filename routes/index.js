const express = require('express');
const router = express.Router();
const controller = require('../controller/index');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/scores', (req, res, next) => {
    controller.score_page(req, res);
});

router.get('/mash', (req, res, next) => {
    controller.mash_page(req,res)
});

module.exports = router;
