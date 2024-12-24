import blog from './blogController';

const router = require('express').Router()

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blogs
 *     description: Retrieve a list of all blog entries.
 *     tags:
 *       - Blogs
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A list of blog entries
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
 *                         description: The ID of the blog
 *                       title:
 *                         type: string
 *                         description: The title of the blog
 *                       image:
 *                         type: string
 *                         description: The URL of the blog's image
 *                       content:
 *                         type: string
 *                         description: The content of the blog
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *             example:
 *               status: true
 *               code: 200
 *               message: "Blogs retrieved successfully"
 *               data:
 *                 - _id: "1"
 *                   title: "Blog Title 1"
 *                   image: "https://example.com/image1.jpg"
 *                   content: "This is the content of the first blog."
 *                   createdAt: "2024-12-24T10:00:00Z"
 *                   updatedAt: "2024-12-24T10:00:00Z"
 *   post:
 *     summary: Add a new blog
 *     description: Create a new blog entry in the database.
 *     tags:
 *       - Blogs
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
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the blog
 *               image:
 *                 type: string
 *                 description: The URL of the blog's image
 *               content:
 *                 type: string
 *                 description: The content of the blog
 *             example:
 *               title: "Blog Title 1"
 *               image: "https://example.com/image1.jpg"
 *               content: "This is the content of the first blog."
 *     responses:
 *       200:
 *         description: Blog created successfully
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
 *                     content:
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
 *               message: "Blog created successfully"
 *               data:
 *                 _id: "1"
 *                 title: "Blog Title 1"
 *                 image: "https://example.com/image1.jpg"
 *                 content: "This is the content of the first blog."
 *                 createdAt: "2024-12-24T10:00:00Z"
 *                 updatedAt: "2024-12-24T10:00:00Z"
 */

/**
 * @swagger
 * /api/blogs/{blogId}:
 *   get:
 *     summary: Get a specific blog
 *     description: Retrieve a specific blog entry by its ID.
 *     tags:
 *       - Blogs
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to retrieve
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: A specific blog entry
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
 *                     content:
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
 *               message: "Blog retrieved successfully"
 *               data:
 *                 _id: "1"
 *                 title: "Blog Title 1"
 *                 image: "https://example.com/image1.jpg"
 *                 content: "This is the content of the first blog."
 *                 createdAt: "2024-12-24T10:00:00Z"
 *                 updatedAt: "2024-12-24T10:00:00Z"
 *   put:
 *     summary: Update a blog
 *     description: Update the details of an existing blog.
 *     tags:
 *       - Blogs
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to update
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
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *               content:
 *                 type: string
 *             example:
 *               title: "Updated Blog Title"
 *               image: "https://example.com/updated-image.jpg"
 *               content: "This is the updated content of the blog."
 *     responses:
 *       200:
 *         description: Blog updated successfully
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
 *                     content:
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
 *               message: "Blog updated successfully"
 *               data:
 *                 _id: "1"
 *                 title: "Updated Blog Title"
 *                 image: "https://example.com/updated-image.jpg"
 *                 content: "This is the updated content of the blog."
 *                 createdAt: "2024-12-24T10:00:00Z"
 *                 updatedAt: "2024-12-24T12:00:00Z"
 *   delete:
 *     summary: Delete a blog
 *     description: Remove a blog by its ID.
 *     tags:
 *       - Blogs
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to delete
 *     security:
 *       - bearerAuth: []  # Requires the Bearer token for this endpoint
 *     responses:
 *       200:
 *         description: Blog deleted successfully
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
 *               message: "Blog deleted successfully"
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */


router.get('/blogs', blog.getBlogs)
router.post('/blogs', blog.storeBlog)

router.get('/blogs/:blogId', blog.findBlog)
router.put('/blogs/:blogId', blog.updateBlog)
router.delete('/blogs/:blogId', blog.deleteBlog)

module.exports = router
