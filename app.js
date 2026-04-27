let express=require('express')
let path=require('path')
let mongoose=require('mongoose')
let app=express()

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./view/home.html'))
  
})
module.exports=app
