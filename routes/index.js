const express = require('express');
const router = express.Router();
const controller = require('../controller/index');
const vote_cont = require('../controller/vote');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect("/mash");
});

router.get('/scores', (req, res, next) => {
    controller.score_page(req, res);
});

router.get('/mash', (req, res, next) => {
    controller.mash_page(req,res)
});
/* called by ajax on /mash */
router.post('/vote', (req,res,next)=> vote_cont.vote_handle(req,res));

module.exports = router;
