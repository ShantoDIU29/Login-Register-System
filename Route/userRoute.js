let express=require('express')
const { getUser } = require('../controllers/userController')
let route=express.Router()
 
route.get('/Registration',getUser)

module.exports=route