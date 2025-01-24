const mongoose = require('mongoose');
const Book = require('../models/book.model'); // Import your Book model

// Get all books
module.exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({
            userId: new mongoose.Types.ObjectId(req.user.id), // Use `new` for ObjectId
        });
        res.status(200).json(books);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific book by ID
module.exports.getBookById = async (req, res) => {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const book = await Book.findOne({
            _id: new mongoose.Types.ObjectId(id), // Use `new` for ObjectId
            userId: new mongoose.Types.ObjectId(req.user.id), // Use `new` for ObjectId
        });
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Create a new book
module.exports.createBook = async (req, res) => {
    const { title, author, genre } = req.body;
    try {
        const book = await Book.create({
            title,
            author,
            genre,
            userId: new mongoose.Types.ObjectId(req.user.id), // Use `new` for ObjectId
        });
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a book
module.exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const book = await Book.findOneAndUpdate(
            {
                _id: new mongoose.Types.ObjectId(id), // Use `new` for ObjectId
                userId: new mongoose.Types.ObjectId(req.user.id), // Ensure userId matches
            },
            { title, author, genre }, // Fields to update
            { new: true } // Return updated book
        );
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a book
module.exports.deleteBook = async (req, res) => {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        console.log(`Attempting to delete book with ID: ${id} for user: ${req.user.id}`);

        const book = await Book.findOneAndDelete({
            _id: new mongoose.Types.ObjectId(id),
            userId: new mongoose.Types.ObjectId(req.user.id), // Ensure book belongs to user
        });

        if (!book) {
            console.log(`Book not found for user ${req.user.id} with ID ${id}`);
            return res.status(404).json({ error: 'Book not found or not authorized to delete' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ error: 'Failed to delete book' });
    }
};
