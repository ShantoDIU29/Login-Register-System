let path=require('path')
let User=require('../model/userModel')
let{v4:uuidV4}=require('uuid')
let getUser=(req,res)=>{
  res.sendFile(path.join(__dirname,'../view/registration.html'))


}

let createUser=async(req,res)=>{ 
  try {
    let {name,email,password,confirm_password}=req.body;

let SingleUser=new User(
  
    {
      "id":uuidV4(),
      name,email,password,confirm_password


    }

)
  await SingleUser.save()
  res.sendFile(path.join(__dirname,'../view/login.html'))
    
  } catch (error) {
    console.log(error)
    res.send('Server Error')
  } 



}

let getLoginPage=(req,res)=>{
res.sendFile(path.join(__dirname,'../view/login.html'))
}


let loginUser=async(req,res)=>{
let{email,password}=req.body
let FindUser= await User.findOne({email:email,password:password})
if(FindUser){
  res.send('Login Succesfull')
}
else
{
  res.send('invailid password and Email')
}

}


module.exports={getUser,createUser,loginUser,getLoginPage}
