let express=require('express')
const { getUser, loginUser, getLoginPage } = require('../controllers/userController')
const { createUser } = require('../controllers/userController')
let route=express.Router()
 
route.get('/Registration',getUser)
route.get('/login',getLoginPage)
route.post('/Registration',createUser)
route.post('/login',loginUser)
module.exports=route