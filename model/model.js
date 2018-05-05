let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_mash').then(
    () =>
        console.info("connected to the db")
    ,
    (err) =>
        console.error("could not connect to the db", err));

let Schema = mongoose.Schema;

/**
 * cat schema that will be needed in the application
 */
let cat = new Schema({
    score: Number,
    url: String,
    id: String
});

exports.CatModel = mongoose.model('Cat', cat);




