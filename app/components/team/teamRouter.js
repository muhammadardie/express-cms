import team from './teamController';

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
 *   - bearerAuth: []
 * 
 * /api/teams:
 *   get:
 *     summary: Get all teams
 *     description: Retrieve a list of all team members.
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of team members
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
 *                       name:
 *                         type: string
 *                       image:
 *                         type: string
 *                       position:
 *                         type: string
 *                       quote:
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
 *                   name: "John Doe"
 *                   image: "/uploads/image.jpg"
 *                   position: "Team Lead"
 *                   quote: "Leading the way!"
 *                   createdAt: "2024-12-17T10:06:20.564Z"
 *                   updatedAt: "2024-12-17T10:06:20.564Z"
 *   post:
 *     summary: Create a new team member
 *     description: Add a new team member.
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - image
 *               - position
 *               - quote
 *             properties:
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               position:
 *                 type: string
 *               quote:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               image: (binary file)
 *               position: "Team Lead"
 *               quote: "Leading the way!"
 *     responses:
 *       201:
 *         description: Team member created successfully
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
 *                     image:
 *                       type: string
 *                     position:
 *                       type: string
 *                     quote:
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
 *               message: "Team member created successfully"
 *               data:
 *                 _id: "12345"
 *                 name: "John Doe"
 *                 image: "/uploads/image.jpg"
 *                 position: "Team Lead"
 *                 quote: "Leading the way!"
 *                 createdAt: "2024-12-17T10:06:20.564Z"
 *                 updatedAt: "2024-12-17T10:06:20.564Z"
 * 
 * /api/teams/{teamId}:
 *   get:
 *     summary: Get a team member
 *     description: Retrieve a team member by ID.
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Team member retrieved successfully
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
 *                     image:
 *                       type: string
 *                     position:
 *                       type: string
 *                     quote:
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
 *                 name: "John Doe"
 *                 image: "/uploads/image.jpg"
 *                 position: "Team Lead"
 *                 quote: "Leading the way!"
 *                 createdAt: "2024-12-17T10:06:20.564Z"
 *                 updatedAt: "2024-12-17T10:06:20.564Z"
 *   put:
 *     summary: Update a team member
 *     description: Update the details of a team member by ID.
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: teamId
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
 *               - name
 *               - position
 *               - quote
 *             properties:
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               position:
 *                 type: string
 *               quote:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               image: (binary file)
 *               position: "Updated Position"
 *               quote: "Updated quote!"
 *     responses:
 *       200:
 *         description: Team member updated successfully
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
 *                     image:
 *                       type: string
 *                     position:
 *                       type: string
 *                     quote:
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
 *               message: "Team member updated successfully"
 *               data:
 *                 _id: "12345"
 *                 name: "John Doe"
 *                 image: "/uploads/image.jpg"
 *                 position: "Updated Position"
 *                 quote: "Updated quote!"
 *                 createdAt: "2024-12-17T10:06:20.564Z"
 *                 updatedAt: "2024-12-18T10:06:20.564Z"
 *   delete:
 *     summary: Delete a team member
 *     description: Remove a team member by ID.
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Team member deleted successfully
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
 *               message: "Team member deleted successfully"
 */


router.get('/teams', team.getTeams)
router.post('/teams', team.storeTeam)

router.get('/teams/:teamId', team.findTeam)
router.put('/teams/:teamId', team.updateTeam)
router.delete('/teams/:teamId', team.deleteTeam)

module.exports = router
