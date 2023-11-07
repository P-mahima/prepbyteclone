const mongoose = require('mongoose')

const fullstackSchema = new mongoose.Schema({
    no:{
        type:Number
    },
    price:{
        type:Number
    }
})

const fullstack = mongoose.model('fullstack' ,fullstackSchema)
module.exports = fullstack