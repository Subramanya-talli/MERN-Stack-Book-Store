const express = require("express");
const { newBookEntry, getOneBook, UpdateBook, deleteBook } = require("../controller/controller");

const routes = express.Router();

routes.post("/newBook", newBookEntry);
routes.get("/details/:id", getOneBook);
routes.put("/edit/:id", UpdateBook);
routes.delete("/delete/:id", deleteBook);

module.exports = routes;