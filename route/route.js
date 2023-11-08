const { addProducts, addProductsToDb, fetchData, deleteProd } = require('../controller/MockTest')
const { RegisterUser, LoginUser, dashboard } = require('../controller/usercontroller')
const auth_middleware = require('../middleware/auth_middleware')
const elevationData = require('../ProductData.js/ElevationData')
const fullStackCourse = require('../ProductData.js/Fullstack')
const MasterData = require('../ProductData.js/MasterData')
const MockData = require('../ProductData.js/MockData')

const route = require('express').Router()

const product = require('../ProductData.js/MockData')



route.post('/register', RegisterUser)
route.post('/login',LoginUser)


route.get("/data", MockData)

route.post("/addnewData", addProducts)
route.post("/addData", addProductsToDb)
route.get("/Data", fetchData)
route.delete("/del", deleteProd)

route.get("/dashboard",auth_middleware , dashboard);

route.get('/fullstack' , fullStackCourse)
route.get('/master' , MasterData)
route.get('/elevation', elevationData)




module.exports = route