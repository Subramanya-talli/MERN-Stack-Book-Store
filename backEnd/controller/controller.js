const Book = require("../models/bookSchema");

async function newBookEntry(req,res)
{
    const { title, publishYear, author} = req.body;
    try {
        if ( !title || !publishYear || !author) {
            return res.status(400).send({ message : "Send all the required details: title, author, Publish Year"})
        }
        const newBook = await Book.create({title, publishYear, author});
        newBook.save();
        return res.status(200).send(newBook);
    } catch (error) {
        return res.status(500).send(error);
    }
} 

async function getAllBooks(req, res)
{
    try {
        const allBooks = await Book.find({});
    console.log(allBooks)
    return res.status(200).json(allBooks)
    } catch (error) {
        return res.status(500).send(error)
    }
    
}

module.exports = {
    newBookEntry,
    getAllBooks
}