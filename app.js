let express=require('express')
let path=require('path')
let mongoose=require('mongoose')
let UserRoute=require('./Route/userRoute')
let app=express()



app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./view/home.html'))
  
})

app.use('/user',UserRoute)
module.exports=app
