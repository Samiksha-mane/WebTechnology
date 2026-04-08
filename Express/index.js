// const express = require('express'); // import express
// const app = express(); // create app
// const port = 3000; // port number


// app.get('/', (req, res) => {
//     //res.send("Hello");

//     const time = Date();
//     res.json({
//         time1 : time,
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);

// });
const express = require('express')
const app = express()
const port = 3000

function CheckRoute(req,res,next)
{
    console.log(req.url);
    next();//without next() req becomes hang
}
app.use(CheckRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('About', (req, res) => {
  res.send('about page!')
})
app.get('/Submit', (req, res) => {
  res.send('Subbmit!')
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
