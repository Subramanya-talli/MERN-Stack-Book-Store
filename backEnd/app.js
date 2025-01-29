const express = require("express")
const routes = require("./routes/routes");
const cors = require("cors");
const {  getAllBooks } = require("../backEnd/controller/controller")


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data

//Connection to MongoDb
const connectionToMongoDB = require("../backEnd/connection");

//MiddleWares
const dotenv = require("dotenv").config()

const PORT = process.env.PORT;

//Routes
app.get('/', getAllBooks)

app.use("/books", routes);


app.listen(PORT , ()=>{
    console.log(`App is running in ${PORT} Port`);
});

connectionToMongoDB(process.env.MongoDB_Url).then(()=>
{
    console.log("App is Connected To Data Base");
});
