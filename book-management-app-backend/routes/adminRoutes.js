// Updated adminRoutes.js with Swagger documentation
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Book = require('../models/book.model');
const { requireAuth, requireAdmin } = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Administrative actions
 */

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all registered users. Admin access required.
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     description: The username of the user
 *                   email:
 *                     type: string
 *                     description: The email of the user
 *       403:
 *         description: Forbidden. Admin access required.
 *       500:
 *         description: Server error.
 */
router.get('/users', requireAuth, requireAdmin, async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

/**
 * @swagger
 * /api/admin/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books in the database. Admin access required.
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     description: The title of the book
 *                   author:
 *                     type: string
 *                     description: The author of the book
 *                   genre:
 *                     type: string
 *                     description: The genre of the book
 *       403:
 *         description: Forbidden. Admin access required.
 *       500:
 *         description: Server error.
 */
router.get('/books', requireAuth, requireAdmin, async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
