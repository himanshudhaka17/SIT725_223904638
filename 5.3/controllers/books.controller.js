const bookService = require('../services/books.service');

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json({
      statusCode: 200,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message
    });
  }
};

// GET book by id
const getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Book not found'
      });
    }

    res.json({
      statusCode: 200,
      data: book
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById
};