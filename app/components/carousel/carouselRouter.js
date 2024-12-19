import carousel from './carouselController';

const router = require('express').Router()

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user and return a JWT token for accessing protected routes.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               email: johndoe@example.com
 *               password: secretpassword
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: Indicates the success of the login request
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 message:
 *                   type: string
 *                   description: Message about the login result
 *                 data:
 *                   type: object
 *                   description: User data and tokens
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The user ID
 *                     username:
 *                       type: string
 *                       description: The user's username
 *                     email:
 *                       type: string
 *                       description: The user's email
 *                     access_token:
 *                       type: string
 *                       description: The JWT access token
 *                     refresh_token:
 *                       type: string
 *                       description: The refresh token
 *               example:
 *                 status: true
 *                 code: 200
 *                 message: "Successfully logged in"
 *                 data:
 *                   _id: "5efc16620854e71c64d4f792"
 *                   username: "Administrator"
 *                   email: "admin@localhost.com"
 *                   access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                   refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *               example:
 *                 message: "Invalid email or password"
 *       500:
 *         description: Internal server error
 */
router.get('/carousels', carousel.getCarousels)
router.post('/carousels', carousel.storeCarousel)

router.get('/carousels/:carouselId', carousel.findCarousel)
router.put('/carousels/:carouselId', carousel.updateCarousel)
router.delete('/carousels/:carouselId', carousel.deleteCarousel)

module.exports = router
