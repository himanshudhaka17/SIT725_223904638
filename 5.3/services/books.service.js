const Book = require('../models/book.model');

// Get all books
const getAllBooks = async () => {
  return await Book.find({});
};

// Get book by custom id field
const getBookById = async (id) => {
  return await Book.findOne({ id });
};

module.exports = {
  getAllBooks,
  getBookById
};