const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const booksController = require('../controllers/booksController');

// Create a new book
router.post('/', booksController.createBook);

// Get a list of all books
router.get('/', booksController.getAllBooks);

// Get details of a specific book by its ID
router.get('/:id', booksController.getBookById);

// Update a book's details
router.put('/:id', booksController.updateBook);

// Delete a book
router.delete('/:id', booksController.deleteBook);

module.exports = router;
