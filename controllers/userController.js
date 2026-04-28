let path=require('path')

let getUser=(req,res)=>{
  res.sendFile(path.join(__dirname,'../view/registration.html'))


}
module.exports={getUser}