import company from './companyController';

const router = require('express').Router()


/**
 * @swagger
 * /api/companies:
 *   get:
 *     summary: Get all companies
 *     description: Retrieve a list of all company entries.
 *     tags:
 *       - Companies
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A list of company entries
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
 *                         description: The ID of the company
 *                       title:
 *                         type: string
 *                         description: The title of the company
 *                       image:
 *                         type: string
 *                         description: The URL of the company’s image
 *                       desc:
 *                         type: string
 *                         description: The description of the company
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *             example:
 *               status: true
 *               code: 200
 *               message: "Companies retrieved successfully"
 *               data:
 *                 - _id: "1"
 *                   title: "Company 1"
 *                   image: "https://example.com/image1.jpg"
 *                   desc: "This is the description of the first company."
 *                   createdAt: "2024-12-24T10:00:00Z"
 *                   updatedAt: "2024-12-24T10:00:00Z"
 *   post:
 *     summary: Add a new company
 *     description: Create a new company entry in the database.
 *     tags:
 *       - Companies
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
 *               - image
 *               - desc
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the company
 *               image:
 *                 type: string
 *                 description: The URL of the company’s image
 *               desc:
 *                 type: string
 *                 description: The description of the company
 *             example:
 *               title: "Company 1"
 *               image: "https://example.com/image1.jpg"
 *               desc: "This is the description of the first company."
 *     responses:
 *       200:
 *         description: Company created successfully
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
 *                     title:
 *                       type: string
 *                     image:
 *                       type: string
 *                     desc:
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
 *               message: "Company created successfully"
 *               data:
 *                 _id: "1"
 *                 title: "Company 1"
 *                 image: "https://example.com/image1.jpg"
 *                 desc: "This is the description of the first company."
 *                 createdAt: "2024-12-24T10:00:00Z"
 *                 updatedAt: "2024-12-24T10:00:00Z"
 *
 * /api/companies/{teamId}:
 *   get:
 *     summary: Get a specific company
 *     description: Retrieve a specific company entry by its ID.
 *     tags:
 *       - Companies
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the company to retrieve
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A specific company entry
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
 *                     title:
 *                       type: string
 *                     image:
 *                       type: string
 *                     desc:
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
 *               message: "Company retrieved successfully"
 *               data:
 *                 _id: "1"
 *                 title: "Company 1"
 *                 image: "https://example.com/image1.jpg"
 *                 desc: "This is the description of the first company."
 *                 createdAt: "2024-12-24T10:00:00Z"
 *                 updatedAt: "2024-12-24T10:00:00Z"
 *   put:
 *     summary: Update a company
 *     description: Update the details of an existing company.
 *     tags:
 *       - Companies
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the company to update
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
 *               - image
 *               - desc
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *               desc:
 *                 type: string
 *             example:
 *               title: "Updated Company Title"
 *               image: "https://example.com/updated-image.jpg"
 *               desc: "This is the updated description of the company."
 *     responses:
 *       200:
 *         description: Company updated successfully
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
 *                     title:
 *                       type: string
 *                     image:
 *                       type: string
 *                     desc:
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
 *               message: "Company updated successfully"
 *               data:
 *                 _id: "1"
 *                 title: "Updated Company Title"
 *                 image: "https://example.com/updated-image.jpg"
 *                 desc: "This is the updated description of the company."
 *                 createdAt: "2024-12-24T10:00:00Z"
 *                 updatedAt: "2024-12-24T12:00:00Z"
 *   delete:
 *     summary: Delete a company
 *     description: Remove a company by its ID.
 *     tags:
 *       - Companies
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the company to delete
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: Company deleted successfully
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
 *               message: "Company deleted successfully"
 *       404:
 *         description: Company not found
 *       500:
 *         description: Internal server error
 */


router.get('/companies', company.getCompanys)
router.post('/companies', company.storeCompany)

router.get('/companies/:companyId', company.findCompany)
router.put('/companies/:companyId', company.updateCompany)
router.delete('/companies/:companyId', company.deleteCompany)

module.exports = router
