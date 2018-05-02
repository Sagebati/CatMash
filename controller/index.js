const model = require('../model/model');


exports.score_page = (res, req) => {
    console.log(model.CatModel.find())
};


console.log(model.CatModel.find({}), (err, cats) => {
        if (err) {
            return console.error(err);
        }
        else {
        }
    }
)
;

