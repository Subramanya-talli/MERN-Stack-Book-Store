const express = require("express");
const { newBookEntry, getAllBooks, getOneBook } = require("../controller/controller");

const routes = express.Router();

routes.post("/newBook", newBookEntry);
routes.get("/", getAllBooks);
routes.get("/:id", getOneBook);



module.exports = routes;