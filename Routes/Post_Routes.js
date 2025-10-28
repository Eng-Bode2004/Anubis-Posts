const express = require('express');
const router = express.Router();

const Post_Controller = require('../Controllers/Post_Controller');

// Upload Post
router.post('/upload', Post_Controller.uploadPost);

// View All Posts
router.get('/', Post_Controller.getAllPosts);

router.delete('/:id', Post_Controller.deletePost);


module.exports = router;
