import express from 'express';
import { findUser, getUsers, storeUser, updateUser, deleteUser }  from './userController';


const router = express.Router();

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
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A list of users
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
 *                   description: List of users
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The user ID
 *                       username:
 *                         type: string
 *                         description: The user's name
 *                       email:
 *                         type: string
 *                         description: The user's email
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation timestamp of the user
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: The last update timestamp of the user
 *                       __v:
 *                         type: integer
 *                         description: Version key (Mongoose specific)
 *             example:
 *               status: true
 *               code: 200
 *               message: ""
 *               data:
 *                 - _id: "5efc16620854e71c64d4f792"
 *                   username: "Administrator"
 *                   email: "admin@localhost.com"
 *                   createdAt: "2020-07-01T04:51:46.041Z"
 *                   updatedAt: "2024-12-17T10:06:20.564Z"
 *                   __v: 0
 *                 - _id: "5f8b13100b3cce002d9e4cb4"
 *                   username: "test"
 *                   email: "test@gmail.com"
 *                   createdAt: "2020-10-17T15:51:44.167Z"
 *                   updatedAt: "2021-01-22T05:45:45.379Z"
 *                   __v: 0
 *   post:
 *     summary: Create a new user
 *     description: Add a new user to the database.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               username: John Doe
 *               email: johndoe@example.com
 *               password: secretpassword
 *     responses:
 *       200:
 *         description: User created successfully
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
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The user ID
 *                     username:
 *                       type: string
 *                       description: The user's name
 *                     email:
 *                       type: string
 *                       description: The user's email
 *             example:
 *               status: true
 *               code: 200
 *               message: "User created successfully"
 *               user:
 *                 _id: "1"
 *                 username: "John Doe"
 *                 email: "johndoe@example.com"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Get a user
 *     description: Retrieve a specific user by their ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A single user
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
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The user ID
 *                     username:
 *                       type: string
 *                       description: The user's name
 *                     email:
 *                       type: string
 *                       description: The user's email
 *             example:
 *               status: true
 *               code: 200
 *               message: ""
 *               user:
 *                 _id: "1"
 *                 username: "John Doe"
 *                 email: "johndoe@example.com"
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update a user
 *     description: Update the details of an existing user.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name
 *               email:
 *                 type: string
 *                 description: The user's email
 *             example:
 *               username: "John Doe Updated"
 *               email: "johndoeupdated@example.com"
 *     responses:
 *       200:
 *         description: User updated successfully
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
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The user ID
 *                     username:
 *                       type: string
 *                       description: The user's name
 *                     email:
 *                       type: string
 *                       description: The user's email
 *             example:
 *               status: true
 *               code: 200
 *               message: "User updated successfully"
 *               user:
 *                 _id: "1"
 *                 username: "John Doe Updated"
 *                 email: "johndoeupdated@example.com"
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a user
 *     description: Remove a user by their ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: User deleted successfully
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
 */

router.get('/users', getUsers)
router.post('/users', storeUser)

router.get('/users/:userId', findUser)
router.put('/users/:userId', updateUser)
router.delete('/users/:userId', deleteUser)

export default router;
