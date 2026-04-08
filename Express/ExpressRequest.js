const express = require('express')
const app = express()
const port = 3000
app.get('/',(req,res =>{
    const T = new Date();
    res.json({
        mess :"Hello",
        Time : T
    })
}))
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})