const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user.model');
const Book = require('./models/book.model');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

// Test User and Book models
const testModels = async () => {
    try {
        // Create a test user
        const testUser = await User.create({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'testpassword',
        });
        console.log('User created:', testUser);

        // Create a test book for the user
        const testBook = await Book.create({
            title: 'Test Book',
            author: 'John Doe',
            genre: 'Fiction',
            userId: testUser._id,
        });
        console.log('Book created:', testBook);

        // Query the book with the user reference
        const books = await Book.find({ userId: testUser._id }).populate('userId');
        console.log('Books associated with user:', books);
    } catch (err) {
        console.error('Error testing models:', err.message);
    } finally {
        mongoose.connection.close();
    }
};

// Run the tests
connectDB().then(testModels);
