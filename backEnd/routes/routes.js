const express = require("express");
const { newBookEntry, getAllBooks } = require("../controller/controller");

const routes = express.Router();

routes.post("/newBook", newBookEntry);
routes.get("/", getAllBooks)


module.exports = routes;