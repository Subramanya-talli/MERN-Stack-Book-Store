const express = require("express")
const routes = require("./routes/routes");


const app = express();
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For form data

//Connection to MongoDb
const connectionToMongoDB = require("../backEnd/connection");

//MiddleWares
const dotenv = require("dotenv").config()

const PORT = process.env.PORT;

//Routes
app.get('/', (req,res)=>
{
    return res.send("Hello World");
});
app.use("/books", routes);

app.listen(PORT , ()=>{
    console.log(`App is running in ${PORT} Port`);
});

connectionToMongoDB(process.env.MongoDB_Url).then(()=>
{
    console.log("App is Connected To DB");
});
