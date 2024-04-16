const express = require("express")
const mongoose = require("mongoose")


const PORT = 8081;
const HOST = "0.0.0.0";
const MONGO_URL = 'mongodb://mongo/test-express';

mongoose.connect(MONGO_URL ,{useNewUrlParser: true})
    .then(() => {

        const app = express();


        app.get('/', (req, res) => res.send("Hello from the app that uses mongodb!"));
        app.listen(PORT, HOST);
        
        console.log("Listening on ", PORT);
    })
.catch(console.error)


