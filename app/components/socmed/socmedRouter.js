import express from 'express';

const router = express.Router();
import { findSocmed, getSocmeds, storeSocmed, updateSocmed, deleteSocmed } from './socmedController';

/**
 * @swagger
 * /api/socmed:
 *   get:
 *     summary: Get all social media items
 *     description: Retrieve a list of all social media entries.
 *     tags:
 *       - Social Media
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A list of social media items
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
 *                         description: The ID of the social media entry
 *                       name:
 *                         type: string
 *                         description: The name of the social media platform
 *                       icon:
 *                         type: string
 *                         description: The font icon of the social media
 *                       url:
 *                         type: string
 *                         description: The URL of the social media platform
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *             example:
 *               status: true
 *               code: 200
 *               message: "Social media items retrieved successfully"
 *               data:
 *                 - _id: "1"
 *                   name: "Twitter"
 *                   icon: "icon-twitter"
 *                   url: "https://twitter.com"
 *                   createdAt: "2024-12-23T10:00:00Z"
 *                   updatedAt: "2024-12-23T10:00:00Z"
 *   post:
 *     summary: Add a new social media entry
 *     description: Create a new social media entry in the database.
 *     tags:
 *       - Social Media
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - icon
 *               - url
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the social media platform
 *               icon:
 *                 type: string
 *                 description: The font icon of the social media
 *               url:
 *                 type: string
 *                 description: The URL of the social media platform
 *             example:
 *               name: "Twitter"
 *               icon: "icon-twitter"
 *               url: "https://twitter.com"
 *     responses:
 *       200:
 *         description: Social media entry created successfully
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
 *                     name:
 *                       type: string
 *                     icon:
 *                       type: string
 *                     url:
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
 *               message: "Social media entry created successfully"
 *               data:
 *                 _id: "1"
 *                 name: "Twitter"
 *                 icon: "icon-twitter"
 *                 url: "https://twitter.com"
 *                 createdAt: "2024-12-23T10:00:00Z"
 *                 updatedAt: "2024-12-23T10:00:00Z"
 */

/**
 * @swagger
 * /api/socmed/{socmedId}:
 *   get:
 *     summary: Get a specific social media item
 *     description: Retrieve a specific social media entry by its ID.
 *     tags:
 *       - Social Media
 *     parameters:
 *       - in: path
 *         name: socmedId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the social media item to retrieve
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A specific social media item
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
 *                     name:
 *                       type: string
 *                     icon:
 *                       type: string
 *                     url:
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
 *               message: "Social media entry retrieved successfully"
 *               data:
 *                 _id: "1"
 *                 name: "Twitter"
 *                 icon: "icon-twitter"
 *                 url: "https://twitter.com"
 *                 createdAt: "2024-12-23T10:00:00Z"
 *                 updatedAt: "2024-12-23T10:00:00Z"
 *   put:
 *     summary: Update a social media item
 *     description: Update the details of an existing social media item.
 *     tags:
 *       - Social Media
 *     parameters:
 *       - in: path
 *         name: socmedId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the social media item to update
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - icon
 *               - url
 *             properties:
 *               name:
 *                 type: string
 *               icon:
 *                 type: string
 *               url:
 *                 type: string
 *             example:
 *               name: "Twitter"
 *               icon: "updated-icon-twitter"
 *               url: "https://twitter.com/new"
 *     responses:
 *       200:
 *         description: Social media entry updated successfully
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
 *                     name:
 *                       type: string
 *                     icon:
 *                       type: string
 *                     url:
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
 *               message: "Social media entry updated successfully"
 *               data:
 *                 _id: "1"
 *                 name: "Twitter"
 *                 icon: "updated-icon-twitter"
 *                 url: "https://twitter.com/new"
 *                 createdAt: "2024-12-23T10:00:00Z"
 *                 updatedAt: "2024-12-23T12:00:00Z"
 *   delete:
 *     summary: Delete a social media item
 *     description: Remove a social media item by its ID.
 *     tags:
 *       - Social Media
 *     parameters:
 *       - in: path
 *         name: socmedId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the social media item to delete
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: Social media entry deleted successfully
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
 *               message: "Social media entry deleted successfully"
 *       404:
 *         description: Social media item not found
 *       500:
 *         description: Internal server error
 */


router.get('/socmeds', getSocmeds)
router.post('/socmeds', storeSocmed)

router.get('/socmeds/:socmedId', findSocmed)
router.put('/socmeds/:socmedId', updateSocmed)
router.delete('/socmeds/:socmedId', deleteSocmed)

export default router;
