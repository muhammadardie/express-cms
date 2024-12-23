import carousel from './carouselController';

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
 *   - bearerAuth: []  # This makes it a global security requirement for all routes
 * 
 * /api/carousels:
 *   get:
 *     summary: Get all carousels
 *     description: Retrieve a list of all carousel items.
 *     tags:
 *       - Carousels
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A list of carousel items
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
 *                   description: Success message (or an error message if applicable)
 *                 data:
 *                   type: array
 *                   description: List of carousel items
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The carousel ID
 *                       image:
 *                         type: string
 *                         description: The image URL of the carousel
 *                       tagline:
 *                         type: string
 *                         description: The tagline of the carousel
 *                       tagdesc:
 *                         type: string
 *                         description: The description of the carousel
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation timestamp of the carousel
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: The last update timestamp of the carousel
 *             example:
 *               status: true
 *               code: 200
 *               message: ""
 *               data:
 *                 - _id: "5efc16620854e71c64d4f792"
 *                   image: "/uploads/image1.jpg"
 *                   tagline: "Welcome to our sale"
 *                   tagdesc: "50% off on selected items"
 *                   createdAt: "2024-12-17T10:06:20.564Z"
 *                   updatedAt: "2024-12-17T10:06:20.564Z"
 *   post:
 *     summary: Create a new carousel
 *     description: Add a new carousel item to the database.
 *     tags:
 *       - Carousels
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *               - tagline
 *               - tagdesc
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image for the carousel
 *               tagline:
 *                 type: string
 *                 description: The tagline for the carousel
 *               tagdesc:
 *                 type: string
 *                 description: The description for the carousel
 *             example:
 *               image: (binary file)
 *               tagline: "New Collection"
 *               tagdesc: "Discover our latest styles"
 *     responses:
 *       200:
 *         description: Carousel created successfully
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
 *                 carousel:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The carousel ID
 *                     image:
 *                       type: string
 *                       description: The image URL
 *                     tagline:
 *                       type: string
 *                       description: The carousel tagline
 *                     tagdesc:
 *                       type: string
 *                       description: The carousel description
 *             example:
 *               status: true
 *               code: 200
 *               message: "Carousel created successfully"
 *               carousel:
 *                 _id: "1"
 *                 image: "/uploads/image2.jpg"
 *                 tagline: "New Collection"
 *                 tagdesc: "Discover our latest styles"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/carousels/{carouselId}:
 *   get:
 *     summary: Get a carousel item
 *     description: Retrieve a specific carousel item by its ID.
 *     tags:
 *       - Carousels
 *     parameters:
 *       - in: path
 *         name: carouselId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the carousel item to retrieve
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A single carousel item
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
 *                   description: Success message (or an error message if applicable)
 *                 carousel:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The carousel ID
 *                     image:
 *                       type: string
 *                       description: The carousel image URL
 *                     tagline:
 *                       type: string
 *                       description: The carousel tagline
 *                     tagdesc:
 *                       type: string
 *                       description: The carousel description
 *             example:
 *               status: true
 *               code: 200
 *               message: ""
 *               carousel:
 *                 _id: "1"
 *                 image: "/uploads/image3.jpg"
 *                 tagline: "Winter Sale"
 *                 tagdesc: "Exclusive discounts for winter"
 *       404:
 *         description: Carousel item not found
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update a carousel item
 *     description: Update the details of an existing carousel item.
 *     tags:
 *       - Carousels
 *     parameters:
 *       - in: path
 *         name: carouselId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the carousel item to update
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - tagline
 *               - tagdesc
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image for the carousel
 *               tagline:
 *                 type: string
 *                 description: The tagline for the carousel
 *               tagdesc:
 *                 type: string
 *                 description: The description for the carousel
 *             example:
 *               image: (binary file)
 *               tagline: "New Collection"
 *               tagdesc: "Discover our latest styles"
 *     responses:
 *       200:
 *         description: Carousel updated successfully
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
 *                 carousel:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The carousel ID
 *                     image:
 *                       type: string
 *                       description: The carousel image URL
 *                     tagline:
 *                       type: string
 *                       description: The carousel tagline
 *                     tagdesc:
 *                       type: string
 *                       description: The carousel description
 *             example:
 *               status: true
 *               code: 200
 *               message: "Carousel updated successfully"
 *               carousel:
 *                 _id: "1"
 *                 image: "/uploads/image4.jpg"
 *                 tagline: "Updated Tagline"
 *                 tagdesc: "Updated Description"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Carousel item not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a carousel item
 *     description: Remove a carousel item by its ID.
 *     tags:
 *       - Carousels
 *     parameters:
 *       - in: path
 *         name: carouselId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the carousel item to delete
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: Carousel deleted successfully
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
 *             example:
 *               status: true
 *               code: 200
 *               message: "Carousel deleted successfully"
 */

router.get('/carousels', carousel.getCarousels)
router.post('/carousels', carousel.storeCarousel)

router.get('/carousels/:carouselId', carousel.findCarousel)
router.put('/carousels/:carouselId', carousel.updateCarousel)
router.delete('/carousels/:carouselId', carousel.deleteCarousel)

module.exports = router
