//Handling request and response
const express = require('express')
const app = express()
const port = 3000
// Express application handles HTTP requet nad response
// request ==>the request object Contains information about the client resuest
// example= url,headers,queery parameters,request cordinater
//What is queery paameters
app.get('/',(req,res)=>
{
    console.log(req.query.name)
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})