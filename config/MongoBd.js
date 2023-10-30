const mongoose = require("mongoose");

const connectToDB = (url) => mongoose.connect(url)
    .then(() => console.log("Connected Mongo db"))
    .catch((err) => console.log(err));


module.exports = connectToDB