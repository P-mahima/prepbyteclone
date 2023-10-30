const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type:String,
        require: true
    },
    userId:{
        type:String,
        require: true
    }
})

const Prep = mongoose.model('Prep', userSchema)

module.exports = Prep