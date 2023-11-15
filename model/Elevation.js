const mongoose = require('mongoose')

const elevationSchema = new mongoose.Schema({
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

const elevation = mongoose.model('elevation' ,elevationSchema)
module.exports = elevation