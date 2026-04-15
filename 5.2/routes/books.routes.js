const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// GET all books
router.get('/', Controllers.booksController.getAllBooks);

// GET book by ID
router.get('/:id', Controllers.booksController.getBookById);

module.exports = router;