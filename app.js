let express=require('express')
let path=require('path')
let mongoose=require('mongoose')
let UserRoute=require('./Route/userRoute')
require('dotenv').config()


mongoose.connect(process.env.URL||
  'mongodb://localhost:27017/login_register_db')

let app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./view/home.html'))
  
})

app.use('/user',UserRoute)
module.exports=app
