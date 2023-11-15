const mongoose = require('mongoose')

const fullstackSchema = new mongoose.Schema({
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

const fullstack = mongoose.model('fullstack' ,fullstackSchema)
module.exports = fullstack