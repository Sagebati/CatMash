const express = require('express');
const router = express.Router();
const controller = require('../controller/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scores', function (req,res,next) {
   res.render('scores', controller.score_page(res,req))
});

module.exports = router;
