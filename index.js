const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
require('dotenv').config();

var publicFolder = path.join(__dirname, "public");

app.listen(port, ()=>{
    console.log("-------Listening on port,", port, "------------");
})

app.get('/', (req, res)=>{
    var htmlFile = path.join(publicFolder , "index.html");
    res.sendFile(htmlFile);
})

