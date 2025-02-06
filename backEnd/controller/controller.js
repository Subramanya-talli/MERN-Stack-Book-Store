const Book = require("../models/bookSchema");

async function newBookEntry(req,res)
{
    const { title, publishYear, author} = req.body;
    try {
        if ( !title || !publishYear || !author) {
            return res.status(400).send({ message : "Send all the required details: title, author, Publish Year"})
        }
        const newBook = await Book.create({title, publishYear, author});
        return res.status(200).send(newBook);
    } catch (error) {
        return res.status(500).send(error.message);
    }
} 

async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find();
        return res.status(200).json({
            count: allBooks.length,
            Books: allBooks
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneBook(req, res) {
    const { id } = req.params;
    console.log(id)
    try {
        const book = await Book.findById(id)
        if(!book)
        {
            return res.status(400).send({message: "Book Not Found"});
        }
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function UpdateBook(req, res) {
    const { title, author, publishYear} = req.body
    try {
        if(!title || !author || !publishYear)
        {
            return res.status(400).send({ message : "Send all the required details: title, author, Publish Year"})
        }

        const book = await await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, publishYear },
            { new: true, runValidators: true }
          );
      
        if(!book)
        {
            return res.status(404).send({message: "Book Not Found"});
        }
        return res.status(200).json(book)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteBook(req, res)
{
    try {
        const { id } = req.params;
        
        const book = await Book.findByIdAndDelete(id);
    
        if (!book) {
            return res.status(404).json({ message: "Book Not found"});
        }
        return res.status(200).send({ message : "Book Deleted Successfully"});
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    newBookEntry,
    getAllBooks,
    getOneBook,
    UpdateBook,
    deleteBook
}