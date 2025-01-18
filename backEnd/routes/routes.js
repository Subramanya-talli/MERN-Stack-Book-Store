const express = require("express");
const { newBookEntry, getAllBooks, getOneBook, UpdateBook, deleteBook } = require("../controller/controller");

const routes = express.Router();

routes.post("/newBook", newBookEntry);
routes.get("/", getAllBooks);
routes.get("/details/:id", getOneBook);
routes.put("/:id", UpdateBook);
routes.delete("/delete/:id", deleteBook);

module.exports = routes;