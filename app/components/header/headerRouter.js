import header from './headerController';

const router = require('express').Router()

/**
 * @swagger
 * /api/headers:
 *   get:
 *     summary: Get all headers
 *     description: Retrieve a list of all headers.
 *     tags:
 *       - Headers
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A list of headers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 code:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       page:
 *                         type: string
 *                         enum: ['Work', 'Feature', 'Blog', 'About', 'Contact']
 *                       image:
 *                         type: string
 *                         description: The URL of the header's image
 *                       tagline:
 *                         type: string
 *                       tagdesc:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *     post:
 *       summary: Add a new header
 *       description: Create a new header entry in the database.
 *       tags:
 *         - Headers
 *       security:
 *         - bearerAuth: []  # Requires the Bearer token for this endpoint
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               required:
 *                 - page
 *                 - image
 *                 - tagline
 *                 - tagdesc
 *               properties:
 *                 page:
 *                   type: string
 *                   enum: ['Work', 'Feature', 'Blog', 'About', 'Contact']
 *                   description: The page the header belongs to
 *                 image:
 *                   type: string
 *                   format: binary
 *                   description: The image file for the header
 *                 tagline:
 *                   type: string
 *                   description: The tagline for the header
 *                 tagdesc:
 *                   type: string
 *                   description: The tag description for the header
 *       responses:
 *         200:
 *           description: Header created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: boolean
 *                   code:
 *                     type: integer
 *                   message:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       page:
 *                         type: string
 *                       image:
 *                         type: string
 *                       tagline:
 *                         type: string
 *                       tagdesc:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 */

/**
 * @swagger
 * /api/headers/{headerId}:
 *   get:
 *     summary: Get a specific header
 *     description: Retrieve a specific header by its ID.
 *     tags:
 *       - Headers
 *     parameters:
 *       - in: path
 *         name: headerId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the header to retrieve
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A specific header
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 code:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     page:
 *                       type: string
 *                     image:
 *                       type: string
 *                     tagline:
 *                       type: string
 *                     tagdesc:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 */

/**
 * @swagger
 * /api/headers/page/{page}:
 *   get:
 *     summary: Get a header by page
 *     description: Retrieve a header by its associated page.
 *     tags:
 *       - Headers
 *     parameters:
 *       - in: path
 *         name: page
 *         required: true
 *         schema:
 *           type: string
 *           enum: ['Work', 'Feature', 'Blog', 'About', 'Contact']
 *         description: The page to retrieve the header for
 *     responses:
 *       200:
 *         description: Header details for the page
 */

/**
 * @swagger
 * /api/headers/{headerId}:
 *   put:
 *     summary: Update a header
 *     description: Update the details of an existing header by ID.
 *     tags:
 *       - Headers
 *     parameters:
 *       - in: path
 *         name: headerId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the header to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: string
 *               tagline:
 *                 type: string
 *               tagdesc:
 *                 type: string
 *     responses:
 *       200:
 *         description: Header updated successfully
 */

/**
 * @swagger
 * /api/headers/{headerId}:
 *   delete:
 *     summary: Delete a header
 *     description: Remove an existing header by its ID.
 *     tags:
 *       - Headers
 *     parameters:
 *       - in: path
 *         name: headerId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the header to delete
 *     responses:
 *       200:
 *         description: Header deleted successfully
 */


router.get('/headers', header.getHeaders)
router.post('/headers', header.storeHeader)

router.get('/headers/:headerId', header.findHeader)
router.get('/headers/page/:page', header.findHeaderByPage)
router.put('/headers/:headerId', header.updateHeader)
router.delete('/headers/:headerId', header.deleteHeader)

module.exports = router
