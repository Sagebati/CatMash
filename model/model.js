let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cat = new Schema({
    score: Number,
    url:String,
    id:String
});

export let CatModel = mongoose.model('Cat', cat);
