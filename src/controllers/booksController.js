const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a list of all books
exports.getAllBooks = (req, res) => {
    Book.find({})
        .exec()
        .then((books) => {
            res.json(books);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

// Get details of a specific book by its ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a book's details
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json(updatedBook);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json({ message: 'Book deleted' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
