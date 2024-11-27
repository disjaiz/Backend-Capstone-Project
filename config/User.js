const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://<db_username>:backBone@cluster0.1gy15.mongodb.net/myDatabase").then(()=>{
    console.log("connected to mongodb atlas");
}).catch((err)=>{
    console.log(err);
});


