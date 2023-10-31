const route = require('express').Router()
const { RegisterUser, LoginUser } = require('../controller/usercontroller')




route.post('/register', RegisterUser)
route.post('/login',LoginUser)


module.exports = route