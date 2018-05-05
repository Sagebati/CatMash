const Elo = require('elo-js'); // Using Elo ladder for notation like in the movie
const model = require('../model/model');


/**
 * Controller who handle the /vote route called by an ajax call on /mash
 * it receives the winner and the looser of the contest of cat and
 * then recalculate their elo.
 * Then he sends to the ajax two news random images for more contest
 * @param req http req
 * @param res http res
 */
exports.vote_handle = (req, res) => {
    const elo = new Elo();
    console.log(req.body);
    let cat_prom = [];
    cat_prom[0] = model.CatModel.findById(req.body.winner);
    cat_prom[1] = model.CatModel.findById(req.body.looser);
    Promise.all(cat_prom).then(cats => {
        let score_w = elo.ifWins(cats[0].score, cats[1].score); // Calculating new score for W cat
        let score_l = elo.ifLoses(cats[1].score, cats[0].score); // Calculating new score for L cat


        console.info("Old scores W/L", cats[0].score, cats[1].score);
        console.info("New scores W/L", score_w, score_l);
        cats[0].score = score_w;
        cats[1].score = score_l;
        cats.forEach(c => c.save(err => {
            if (err) console.error(err)
        })); // Saving new scores;

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
                        res.json(cats) // sending to new cats
                    },
                    err => {
                        console.error("Error during cats promising ", err)
                    })
            }
        });
    });
};






