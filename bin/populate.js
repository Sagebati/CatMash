const CatModel = require('../model/model').CatModel;

cats = require('../cats');
catss = [cats.images.length];
for(let i = 0; i < cats.images.length ;i++){
    new CatModel({score: 1200, url:cats.images[i].url, id:cats.images[i].id}).save((err)=>
    {if (err) console.error(err)})
}

console.log("Populated ", cats.images.length, "cats");