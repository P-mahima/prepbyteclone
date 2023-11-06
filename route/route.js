const { addProducts, addProductsToDb, fetchData, deleteProd } = require('../controller/MockTest')
const { RegisterUser, LoginUser } = require('../controller/userController')

const route = require('express').Router()

const Product = require('../ProductData.js/MockData')



route.post('/register', RegisterUser)
route.post('/login',LoginUser)


route.get("/data", Product)

route.post("/addnewData", addProducts)
route.post("/addData", addProductsToDb)
route.get("/Data", fetchData)
route.delete("/del", deleteProd)






module.exports = route