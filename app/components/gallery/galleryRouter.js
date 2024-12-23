import gallery from './galleryController';

const router = require('express').Router()

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * security:
 *   - bearerAuth: []  # Global security requirement for all routes
 * 
 * /api/galleries:
 *   get:
 *     summary: Get all galleries
 *     description: Retrieve a list of all gallery items.
 *     tags:
 *       - Galleries
 *     security:
 *       - bearerAuth: []  # Bearer token required
 *     responses:
 *       200:
 *         description: A list of gallery items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: Indicates success or failure
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 message:
 *                   type: string
 *                   description: Success message or error message
 *                 data:
 *                   type: array
 *                   description: List of gallery items
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: Gallery ID
 *                       title:
 *                         type: string
 *                         description: Gallery title
 *                       url:
 *                         type: string
 *                         description: URL of the gallery
 *                       image:
 *                         type: string
 *                         description: Image URL
 *                       desc:
 *                         type: string
 *                         description: Gallery description
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Creation timestamp
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Last update timestamp
 *     example:
 *       status: true
 *       code: 200
 *       message: ""
 *       data:
 *         - _id: "1"
 *           title: "Gallery Title"
 *           url: "https://example.com/gallery"
 *           image: "/uploads/image.jpg"
 *           desc: "Gallery description"
 *           createdAt: "2024-12-23T10:06:20.564Z"
 *           updatedAt: "2024-12-23T10:06:20.564Z"
 * 
 *   post:
 *     summary: Create a new gallery
 *     description: Add a new gallery item to the database.
 *     tags:
 *       - Galleries
 *     security:
 *       - bearerAuth: []  # Bearer token required
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - url
 *               - image
 *             properties:
 *               title:
 *                 type: string
 *                 description: Gallery title
 *               url:
 *                 type: string
 *                 description: URL of the gallery
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the gallery
 *               desc:
 *                 type: string
 *                 description: Optional description of the gallery
 *             example:
 *               title: "Gallery Title"
 *               url: "https://example.com/gallery"
 *               image: (binary file)
 *               desc: "Optional description"
 *     responses:
 *       200:
 *         description: Gallery created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: Indicates success or failure
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 message:
 *                   type: string
 *                   description: Success message
 *                 gallery:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: Gallery ID
 *                     title:
 *                       type: string
 *                       description: Gallery title
 *                     url:
 *                       type: string
 *                       description: URL of the gallery
 *                     image:
 *                       type: string
 *                       description: Image URL
 *                     desc:
 *                       type: string
 *                       description: Gallery description
 *             example:
 *               status: true
 *               code: 200
 *               message: "Gallery created successfully"
 *               gallery:
 *                 _id: "1"
 *                 title: "Gallery Title"
 *                 url: "https://example.com/gallery"
 *                 image: "/uploads/image.jpg"
 *                 desc: "Optional description"
 * 
 * /api/galleries/{galleryId}:
 *   get:
 *     summary: Get a gallery item
 *     description: Retrieve a specific gallery item by its ID.
 *     tags:
 *       - Galleries
 *     parameters:
 *       - in: path
 *         name: galleryId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the gallery item
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A single gallery item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: Indicates success or failure
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 message:
 *                   type: string
 *                   description: Success message or error message
 *                 gallery:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     url:
 *                       type: string
 *                     image:
 *                       type: string
 *                     desc:
 *                       type: string
 *     example:
 *       status: true
 *       code: 200
 *       message: ""
 *       gallery:
 *         _id: "1"
 *         title: "Gallery Title"
 *         url: "https://example.com/gallery"
 *         image: "/uploads/image.jpg"
 *         desc: "Optional description"
 * 
 *   put:
 *     summary: Update a gallery item
 *     tags:
 *       - Galleries
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               url:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               desc:
 *                 type: string
 *             example:
 *               title: "Updated Title"
 *               url: "https://example.com/gallery"
 *               image: (binary file)
 *               desc: "Updated description"
 *     responses:
 *       200:
 *         description: Gallery updated successfully
 * 
 *   delete:
 *     summary: Delete a gallery item
 *     tags:
 *       - Galleries
 *     parameters:
 *       - in: path
 *         name: galleryId
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Gallery deleted successfully
 */


router.get('/galleries', gallery.getGallerys)
router.post('/galleries', gallery.storeGallery)

router.get('/galleries/:galleryId', gallery.findGallery)
router.put('/galleries/:galleryId', gallery.updateGallery)
router.delete('/galleries/:galleryId', gallery.deleteGallery)

module.exports = router
