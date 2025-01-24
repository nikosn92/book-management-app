const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { requireAuth } = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management API
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The book title
 *               author:
 *                 type: string
 *                 description: The book author
 *               genre:
 *                 type: string
 *                 description: The book genre
 *             example:
 *               title: "The Great Gatsby"
 *               author: "F. Scott Fitzgerald"
 *               genre: "Classic"
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', requireAuth, bookController.createBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The book ID
 *                   title:
 *                     type: string
 *                     description: The book title
 *                   author:
 *                     type: string
 *                     description: The book author
 *                   genre:
 *                     type: string
 *                     description: The book genre
 */
router.get('/', requireAuth, bookController.getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID
 *     responses:
 *       200:
 *         description: Book data retrieved successfully
 *       404:
 *         description: Book not found
 */
router.get('/:id', requireAuth, bookController.getBookById);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The book title
 *               author:
 *                 type: string
 *                 description: The book author
 *               genre:
 *                 type: string
 *                 description: The book genre
 *             example:
 *               title: "New Title"
 *               author: "New Author"
 *               genre: "New Genre"
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Bad request
 */
router.put('/:id', requireAuth, bookController.updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete('/:id', requireAuth, bookController.deleteBook);

module.exports = router;
