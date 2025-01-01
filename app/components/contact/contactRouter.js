import express from 'express';

const router = express.Router();
import { findContact, getContacts, storeContact, updateContact, deleteContact } from './contactController';

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get all contacts
 *     description: Retrieve a list of all contacts.
 *     tags:
 *       - Contacts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of contacts
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
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The contact ID
 *                       address:
 *                         type: string
 *                         description: The contact's address
 *                       phone:
 *                         type: string
 *                         description: The contact's phone number
 *                       mail:
 *                         type: string
 *                         description: The contact's email
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation timestamp
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: The last update timestamp
 *             example:
 *               status: true
 *               code: 200
 *               message: "Contacts retrieved successfully"
 *               data:
 *                 - _id: "1"
 *                   address: "123 Main St"
 *                   phone: "+123456789"
 *                   mail: "contact@example.com"
 *                   createdAt: "2024-12-23T10:00:00Z"
 *                   updatedAt: "2024-12-23T10:00:00Z"
 *   post:
 *     summary: Create a new contact
 *     description: Add a new contact to the database.
 *     tags:
 *       - Contacts
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - address
 *               - phone
 *               - mail
 *             properties:
 *               address:
 *                 type: string
 *                 description: The contact's address
 *               phone:
 *                 type: string
 *                 description: The contact's phone number
 *               mail:
 *                 type: string
 *                 description: The contact's email
 *             example:
 *               address: "123 Main St"
 *               phone: "+123456789"
 *               mail: "contact@example.com"
 *     responses:
 *       200:
 *         description: Contact created successfully
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
 *                 contact:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The contact ID
 *                     address:
 *                       type: string
 *                       description: The contact's address
 *                     phone:
 *                       type: string
 *                       description: The contact's phone number
 *                     mail:
 *                       type: string
 *                       description: The contact's email
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: The creation timestamp
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: The last update timestamp
 *             example:
 *               status: true
 *               code: 200
 *               message: "Contact created successfully"
 *               contact:
 *                 _id: "1"
 *                 address: "123 Main St"
 *                 phone: "+123456789"
 *                 mail: "contact@example.com"
 *                 createdAt: "2024-12-23T10:00:00Z"
 *                 updatedAt: "2024-12-23T10:00:00Z"
 */

/**
 * @swagger
 * /api/contacts/{contactId}:
 *   get:
 *     summary: Get a specific contact
 *     description: Retrieve a specific contact by its ID.
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Contact retrieved successfully
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
 *                 contact:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The contact ID
 *                     address:
 *                       type: string
 *                       description: The contact's address
 *                     phone:
 *                       type: string
 *                       description: The contact's phone number
 *                     mail:
 *                       type: string
 *                       description: The contact's email
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: The creation timestamp
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: The last update timestamp
 *             example:
 *               status: true
 *               code: 200
 *               message: "Contact retrieved successfully"
 *               contact:
 *                 _id: "1"
 *                 address: "123 Main St"
 *                 phone: "+123456789"
 *                 mail: "contact@example.com"
 *                 createdAt: "2024-12-23T10:00:00Z"
 *                 updatedAt: "2024-12-23T10:00:00Z"
 *   put:
 *     summary: Update a contact
 *     description: Update the details of an existing contact.
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to update
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               mail:
 *                 type: string
 *             example:
 *               address: "456 New Address"
 *               phone: "+987654321"
 *               mail: "new_contact@example.com"
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a contact item
 *     description: Remove a contact item by its ID.
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact item to delete
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: Contact deleted successfully
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
 *               message: "Contact deleted successfully"
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Internal server error
 */


router.get('/contacts', getContacts)
router.post('/contacts', storeContact)

router.get('/contacts/:contactId', findContact)
router.put('/contacts/:contactId', updateContact)
router.delete('/contacts/:contactId', deleteContact)

export default router;
