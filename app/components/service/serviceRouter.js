import { findService, getServices, storeService, updateService, deleteService } from './serviceController';
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     description: Retrieve a list of all services.
 *     tags:
 *       - Services
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A list of services
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
 *                   description: List of services
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The service ID
 *                       title:
 *                         type: string
 *                         description: The title of the service
 *                       icon:
 *                         type: string
 *                         description: The font icon associated with the service
 *                       desc:
 *                         type: string
 *                         description: The description of the service
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation timestamp of the service
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: The last update timestamp of the service
 *             example:
 *               status: true
 *               code: 200
 *               message: "Services retrieved successfully"
 *               data:
 *                 - _id: "1"
 *                   title: "Service 1"
 *                   icon: "fa fa-pencil"
 *                   desc: "Description for Service 1"
 *                   createdAt: "2024-12-23T10:00:00Z"
 *                   updatedAt: "2024-12-23T10:00:00Z"
 *   post:
 *     summary: Create a new service
 *     description: Add a new service to the database.
 *     tags:
 *       - Services
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - icon
 *               - desc
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the service
 *               icon:
 *                 type: string
 *                 description: The font icon associated with the service
 *               desc:
 *                 type: string
 *                 description: The description of the service
 *             example:
 *               title: "Service 1"
 *               icon: "fa fa-pencil"
 *               desc: "Description for Service 1"
 *     responses:
 *       200:
 *         description: Service created successfully
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
 *                 service:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The service ID
 *                     title:
 *                       type: string
 *                       description: The title of the service
 *                     icon:
 *                       type: string
 *                       description: The font icon associated with the service
 *                     desc:
 *                       type: string
 *                       description: The description of the service
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: The creation timestamp of the service
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: The last update timestamp of the service
 *             example:
 *               status: true
 *               code: 200
 *               message: "Service created successfully"
 *               service:
 *                 _id: "1"
 *                 title: "Service 1"
 *                 icon: "fa fa-pencil"
 *                 desc: "Description for Service 1"
 *                 createdAt: "2024-12-23T10:00:00Z"
 *                 updatedAt: "2024-12-23T10:00:00Z"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/services/{serviceId}:
 *   get:
 *     summary: Get a service item
 *     description: Retrieve a specific service item by its ID.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the service item to retrieve
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A single service item
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
 *                 service:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The service ID
 *                     title:
 *                       type: string
 *                       description: The service title
 *                     icon:
 *                       type: string
 *                       description: The service icon
 *                     desc:
 *                       type: string
 *                       description: The service description
 *             example:
 *               status: true
 *               code: 200
 *               message: ""
 *               service:
 *                 _id: "1"
 *                 title: "Web Development"
 *                 icon: "web-icon.png"
 *                 desc: "Professional web development services"
 *       404:
 *         description: Service item not found
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update a service item
 *     description: Update the details of an existing service item.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the service item to update
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - icon
 *               - desc
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the service
 *               icon:
 *                 type: string
 *                 description: The icon of the service
 *               desc:
 *                 type: string
 *                 description: The description of the service
 *             example:
 *               title: "Web Development"
 *               icon: "new-icon.png"
 *               desc: "Updated description for the service"
 *     responses:
 *       200:
 *         description: Service updated successfully
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
 *                 service:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The service ID
 *                     title:
 *                       type: string
 *                       description: The service title
 *                     icon:
 *                       type: string
 *                       description: The service icon
 *                     desc:
 *                       type: string
 *                       description: The service description
 *             example:
 *               status: true
 *               code: 200
 *               message: "Service updated successfully"
 *               service:
 *                 _id: "1"
 *                 title: "Web Development"
 *                 icon: "updated-icon.png"
 *                 desc: "Updated description for the service"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Service item not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a service item
 *     description: Remove a service item by its ID.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the service item to delete
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: Service deleted successfully
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
 *               message: "Service deleted successfully"
 *       404:
 *         description: Service item not found
 *       500:
 *         description: Internal server error
 */

router.get('/services', getServices)
router.post('/services', storeService)

router.get('/services/:serviceId', findService)
router.put('/services/:serviceId', updateService)
router.delete('/services/:serviceId', deleteService)

export default router;
