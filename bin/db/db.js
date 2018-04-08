
let Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/History');

let mongoose = Mongoose.connection.then(function () {
    console.log("CONNECTED");
}).catch(function () {
    console.log("NOT CONNECTED");
});

let db={};
db.mongoose=mongoose;
db.Mongoose=Mongoose;

const history = require("../schemas/history-schema");

db.history = history.instance(Mongoose);


module.exports=db;