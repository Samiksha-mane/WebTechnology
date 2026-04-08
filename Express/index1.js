// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about',(req,res) => {
//     res.send('Welcome to home page')
// })
// app.get('/submit',(req,res) =>{
//     res.send('Submit the form!')
// })
// app.get('/Result',(req,res)=>{
//     res.send('see your result!')
// })

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`)
// })

// const express = require('express')
// const app = express()
// const port = 3000

// // HOME
// app.get('/', (req, res) => {
//   res.send(`
//     <h1>Home Page</h1>
//     <a href="/about">About</a><br>
//     <a href="/submit">Submit</a><br>
//     <a href="/result">Result</a><br>

//     <button onclick="alert('Hello!')">Click Me</button>
//   `)
// })

// // ABOUT
// app.get('/about', (req, res) => {
//   res.send(`
//     <h1>About Page</h1>
//     <a href="/">Home</a><br>
//     <button onclick="alert('About page button')">Click Me</button>
//   `)
// })

// // SUBMIT
// app.get('/submit', (req, res) => {
//   res.send(`
//     <h1>Submit Page</h1>
//     <a href="/">Home</a><br>
//     <button onclick="alert('Submit page button')">Click Me</button>
//   `)
// })

// // RESULT
// app.get('/result', (req, res) => {
//   res.send(`
//     <h1>Result Page</h1>
//     <a href="/">Home</a><br>
//     <button onclick="alert('Result page button')">Click Me</button>
//   `)
// })

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`)
// })
app.use((req,res,next)=>{
  console.log(`Date recived:${new Date()}`);
  next();
})