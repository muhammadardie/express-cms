import express from 'express';
import { findAbout, getAbouts, storeAbout, updateAbout, deleteAbout } from './aboutController';

const router = express.Router();

/**
 * @swagger
 * /api/abouts:
 *   get:
 *     summary: Get all abouts
 *     description: Retrieve a list of all abouts.
 *     tags:
 *       - Abouts
 *     responses:
 *       200:
 *         description: A list of abouts
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
 *                       image:
 *                         type: string
 *                         description: The URL of the about's image
 *                       title:
 *                         type: string
 *                         description: The title of the about section
 *                       desc:
 *                         type: string
 *                         description: The description of the about section
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *   post:
 *     summary: Add a new about
 *     description: Create a new about entry in the database.
 *     tags:
 *       - Abouts
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *               - title
 *               - desc
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file for the about section
 *               title:
 *                 type: string
 *                 maxLength: 150
 *                 description: The title for the about section
 *               desc:
 *                 type: string
 *                 maxLength: 500
 *                 description: The description for the about section
 *     responses:
 *       200:
 *         description: About created successfully
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
 *                     image:
 *                       type: string
 *                     title:
 *                       type: string
 *                     desc:
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
 * /api/abouts/{aboutId}:
 *   get:
 *     summary: Get a specific about
 *     description: Retrieve a specific about by its ID.
 *     tags:
 *       - Abouts
 *     parameters:
 *       - in: path
 *         name: aboutId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the about to retrieve
 *     responses:
 *       200:
 *         description: A specific about
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
 *                     image:
 *                       type: string
 *                     title:
 *                       type: string
 *                     desc:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *   put:
 *     summary: Update an about
 *     description: Update the details of an existing about by ID.
 *     tags:
 *       - Abouts
 *     parameters:
 *       - in: path
 *         name: aboutId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the about to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file for the about section (optional)
 *               title:
 *                 type: string
 *                 maxLength: 150
 *                 description: The updated title for the about section
 *               desc:
 *                 type: string
 *                 maxLength: 500
 *                 description: The updated description for the about section
 *     responses:
 *       200:
 *         description: About updated successfully
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
 *                     image:
 *                       type: string
 *                     title:
 *                       type: string
 *                     desc:
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
 * /api/abouts/{aboutId}:
 *   delete:
 *     summary: Delete an about
 *     description: Remove an existing about by its ID.
 *     tags:
 *       - Abouts
 *     parameters:
 *       - in: path
 *         name: aboutId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the about to delete
 *     responses:
 *       200:
 *         description: About deleted successfully
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
 *               message: "About deleted successfully"
 *       404:
 *         description: About not found
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
 *               status: false
 *               code: 404
 *               message: "About not found"
 *       500:
 *         description: Server error
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
 *               status: false
 *               code: 500
 *               message: "Internal server error"
 */


router.get('/abouts', getAbouts)
router.post('/abouts', storeAbout)

router.get('/abouts/:aboutId', findAbout)
router.put('/abouts/:aboutId', updateAbout)
router.delete('/abouts/:aboutId', deleteAbout)

export default router;
