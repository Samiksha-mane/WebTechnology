const express = require('express'); // import express
const app = express(); // create app
const port = 3000; // port number

app.get('/', (req, res) => {
    //res.send("Hello");

    const time = Date();
    res.json({
        time1 : time,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

});
