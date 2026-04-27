let app=require('./app')
let port=3000

app.listen(port,()=>{
  console.log(`server is running successfully at http://localhost:${port}`)
})