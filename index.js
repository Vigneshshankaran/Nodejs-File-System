const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) =>{
res.send('Hello World');
});

app.get('/createFiles', (req, res) => {


    let date = new Date().toUTCString();
    console.log(date);

const path = "./timeanddate/date.txt";


    //to write a file
    fs.writeFile(path, (date), (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Done")
    })
    res.send(`<h1 style="text-align:center;">${date}</h1>`)
})



app.listen(3000);