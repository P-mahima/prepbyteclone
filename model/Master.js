const mongoose = require('mongoose')

const masterSchema = new mongoose.Schema({
    no:{
        type:Number
    },
    price:{
        type:Number
    },
    image:{
        type:String
    }
})

const master = mongoose.model('master' ,masterSchema)
module.exports = master