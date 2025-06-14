// controllers/bookController.js
const Book = require("../models/book.model.js");

// @desc Get all books
exports.getBooks = async (_req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (_err) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
};

// @desc Get single book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: "Book not found" });
        res.json(book);
    } catch (_err) {
        res.status(500).json({ error: "Server error" });
    }
};

// @desc Create new book (Admin only)
exports.createBook = async (req, res) => {
    const { title, author, description, coverImage, categories } = req.body;
    try {
        const book = new Book({
            title,
            author,
            description,
            coverImage,
            categories,
        });
        await book.save();
        res.status(201).json(book);
    } catch (_err) {
        res.status(400).json({ error: "Failed to create book" });
    }
};

// @desc Update book by ID
exports.updateBook = async (req, res) => {
    const updates = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true },
        );
        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(updatedBook);
    } catch (_err) {
        res.status(400).json({ error: "Failed to update book" });
    }
};

// @desc Delete book by ID
exports.deleteBook = async (req, res) => {
    console.log("Attempting to delete book with ID:", req.params.id);
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json({ message: "Book deleted successfully" });
    } catch (_err) {
        console.error("Delete error:", _err);
        res.status(500).json({ error: "Failed to delete book" });
    }
};

