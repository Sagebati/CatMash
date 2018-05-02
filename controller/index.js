const model = require('../model/model');


exports.score_page = (req, res) => {
    model.CatModel.find({}).sort('score').exec((err, cats) => {
        if (err) {
            console.error("Error fetching kittens on the db", err);
        } else {
            res.render('scores', {cats: cats})
        }
    });
};

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
            pro_cats[0] = model.CatModel.findOne().skip(rnd).exec();
            pro_cats[1] = model.CatModel.findOne().skip(rnd2).exec();

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


