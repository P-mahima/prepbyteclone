const route = require('express').Router()
const { RegisterUser, LoginUser } = require('../controller/userController')




route.post('/register', RegisterUser)
route.post('/login',LoginUser)


module.exports = route