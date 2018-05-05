const CatModel = require('../model/model').CatModel;

cats = require('../cats');
cat_prom = [cats.images.length];
for (let i = 0; i < cats.images.length; i++) {
    cat_prom[i] = new CatModel({score: 1200, url: cats.images[i].url, id: cats.images[i].id}).save()
}

Promise.all(cat_prom).then(() => {
        console.log("Populated ", cats.images.length, "cats");
        process.exit(0)
    },
    (err) => {
        console.error(err);
        process.exit(1)
    });

