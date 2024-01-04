// blog routes
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers');
const authMiddleware  = require('../middlewares/checkAdmin');

router.post('/createBlog',authMiddleware,blogController.createBlogPost);
router.get('/get_blogs',blogController.getAllBlogPosts);
router.get('/get_blog/:id',blogController.getBlogPostById);
router.put('/update_blog/:id',authMiddleware,blogController.updateBlogPost);
router.delete('/delete_blog/:id',authMiddleware,blogController.deleteBlogPost);


module.exports = router;