const Book = require('../models/Book');

// Create a new book
exports.createBook = (req, res) => {
    const newBook = new Book(req.body);

    newBook
        .save()
        .then((book) => {
            res.status(201).json(book);
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
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
exports.getBookById = (req, res) => {
    Book.findById(req.params.id)
        .exec()
        .then((book) => {
            if (!book) {
                res.status(404).json({ error: 'Book not found' });
            } else {
                res.json(book);
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

// Update a book's details
exports.updateBook = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((book) => {
            if (!book) {
                res.status(404).json({ error: 'Book not found' });
            } else {
                res.json(book);
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

// Delete a book
exports.deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.id })
        .then((result) => {
            if (result.deletedCount === 0) {
                res.status(404).json({ error: 'Book not found' });
            } else {
                res.json({ message: 'Book deleted successfully' });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};
