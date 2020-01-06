import blog from './blogController';

const router = require('express').Router()

router.get('/blog', blog.getBlogs)
router.post('/blog', blog.storeBlog)

router.get('/blog/:blogId', blog.findBlog)
router.put('/blog/:blogId', blog.updateBlog)
router.delete('/blog/:blogId', blog.deleteBlog)

module.exports = router
