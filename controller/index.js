const model = require('../model/model');

/**
 * controller for the /score page
 * @param req http req
 * @param res http res
 */
exports.score_page = (req, res) => {
    model.CatModel.find({}).sort({"score":-1}).exec((err, cats) => {
        if (err) {
            console.error("Error fetching kittens on the db", err);
        } else {
            res.render('scores', {cats: cats})
        }
    });
};
/**
 * controller for the mash page
 * @param req http request
 * @param res http res
 */
exports.mash_page = (req, res) => {
    model.CatModel.count((err, count) => {
        if (err) {
            console.error(err)
        } else {
            let rnd2;
            let rnd;
            do {
                rnd = Math.floor(Math.random() * count);
                rnd2 = Math.floor(Math.random() * count);
            } while (rnd === rnd2);
            let pro_cats = [];
            const columns = [];
            pro_cats[0] = model.CatModel.findOne({}, columns).skip(rnd).exec();
            pro_cats[1] = model.CatModel.findOne({}, columns).skip(rnd2).exec();

            Promise.all(pro_cats).then(
                cats => {
                    res.render('mash', {cats: cats})
                },
                err => {
                    console.error("Error during cats promising ", err)
                })
        }
    })
};


