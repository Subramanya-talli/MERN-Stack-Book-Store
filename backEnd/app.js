const express = require("express")


const app = express();
const connectionToMongoDB = require("../backEnd/connection");

//MiddleWares
const dotenv = require("dotenv").config()

const PORT = process.env.PORT;

app.get('/', (req,res)=>
{
    return res.send("Hello World");
});

app.listen(PORT , ()=>{
    console.log(`App is running in ${PORT} Port`);
});

connectionToMongoDB(process.env.MongoDB_Url).then(()=>
{
    console.log("Connected To DB");
});
