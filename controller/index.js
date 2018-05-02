const model = require('../model/model');


exports.score_page = (req, res) => {
    console.log(model.CatModel.find({}).sort('score').exec((err,cats) => {
        if (err){
            console.error("Error fetching kittens on the db", err);
        }else {
            res.render('scores', {cats:cats})
        }
    }));
};


model.CatModel.find({}, (err, cats) => {
        if (err) {
            console.error("Error :",err);
        }
        else {

        }
    }
)
;

