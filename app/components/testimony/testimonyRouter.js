import express from 'express';
import { findTestimony, getTestimonies, storeTestimony, updateTestimony, deleteTestimony } from './testimonyController';

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
 *   - bearerAuth: []
 * 
 * /api/testimonies:
 *   get:
 *     summary: Get all testimonies
 *     description: Retrieve a list of all testimonies.
 *     tags:
 *       - Testimonies
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of testimonies
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
 *                       username:
 *                         type: string
 *                       avatar:
 *                         type: string
 *                       comment:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *             example:
 *               status: true
 *               code: 200
 *               message: "Success"
 *               data:
 *                 - _id: "12345"
 *                   username: "John Doe"
 *                   avatar: "/uploads/avatar.jpg"
 *                   comment: "Amazing service!"
 *                   createdAt: "2024-12-17T10:06:20.564Z"
 *                   updatedAt: "2024-12-17T10:06:20.564Z"
 *   post:
 *     summary: Create a new testimony
 *     description: Add a new testimony.
 *     tags:
 *       - Testimonies
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - avatar
 *               - comment
 *             properties:
 *               username:
 *                 type: string
 *               avatar:
 *                 type: string
 *                 format: binary
 *               comment:
 *                 type: string
 *             example:
 *               username: "John Doe"
 *               avatar: (binary file)
 *               comment: "Amazing service!"
 *     responses:
 *       201:
 *         description: Testimony created successfully
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
 *                     username:
 *                       type: string
 *                     avatar:
 *                       type: string
 *                     comment:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *             example:
 *               status: true
 *               code: 201
 *               message: "Testimony created successfully"
 *               data:
 *                 _id: "12345"
 *                 username: "John Doe"
 *                 avatar: "/uploads/avatar.jpg"
 *                 comment: "Amazing service!"
 *                 createdAt: "2024-12-17T10:06:20.564Z"
 *                 updatedAt: "2024-12-17T10:06:20.564Z"
 * 
 * /api/testimonies/{testimonyId}:
 *   get:
 *     summary: Get a testimony
 *     description: Retrieve a testimony by ID.
 *     tags:
 *       - Testimonies
 *     parameters:
 *       - in: path
 *         name: testimonyId
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Testimony retrieved successfully
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
 *                     username:
 *                       type: string
 *                     avatar:
 *                       type: string
 *                     comment:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *             example:
 *               status: true
 *               code: 200
 *               message: "Success"
 *               data:
 *                 _id: "12345"
 *                 username: "John Doe"
 *                 avatar: "/uploads/avatar.jpg"
 *                 comment: "Amazing service!"
 *                 createdAt: "2024-12-17T10:06:20.564Z"
 *                 updatedAt: "2024-12-17T10:06:20.564Z"
 *   put:
 *     summary: Update a testimony
 *     description: Update the details of a testimony by ID.
 *     tags:
 *       - Testimonies
 *     parameters:
 *       - in: path
 *         name: testimonyId
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - comment
 *             properties:
 *               username:
 *                 type: string
 *               avatar:
 *                 type: string
 *                 format: binary
 *               comment:
 *                 type: string
 *             example:
 *               username: "John Doe"
 *               avatar: (binary file)
 *               comment: "Updated comment!"
 *     responses:
 *       200:
 *         description: Testimony updated successfully
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
 *                     username:
 *                       type: string
 *                     avatar:
 *                       type: string
 *                     comment:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *             example:
 *               status: true
 *               code: 200
 *               message: "Testimony updated successfully"
 *               data:
 *                 _id: "12345"
 *                 username: "John Doe"
 *                 avatar: "/uploads/avatar.jpg"
 *                 comment: "Updated comment!"
 *                 createdAt: "2024-12-17T10:06:20.564Z"
 *                 updatedAt: "2024-12-18T10:06:20.564Z"
 *   delete:
 *     summary: Delete a testimony
 *     description: Remove a testimony by ID.
 *     tags:
 *       - Testimonies
 *     parameters:
 *       - in: path
 *         name: testimonyId
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Testimony deleted successfully
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
 *             example:
 *               status: true
 *               code: 200
 *               message: "Testimony deleted successfully"
 */


router.get('/testimonies', getTestimonies)
router.post('/testimonies', storeTestimony)

router.get('/testimonies/:testimonyId', findTestimony)
router.put('/testimonies/:testimonyId', updateTestimony)
router.delete('/testimonies/:testimonyId', deleteTestimony)

export default router;
