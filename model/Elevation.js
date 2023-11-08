const mongoose = require('mongoose')

const elevationSchema = new mongoose.Schema({
    no:{
        type:Number
    },
    price:{
        type:Number
    }
})

const elevation = mongoose.model('elevation' ,elevationSchema)
module.exports = elevation