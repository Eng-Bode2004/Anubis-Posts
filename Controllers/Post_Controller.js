const Post_Service = require('../Services/Post_Service');

class Post_Controller {

    // Upload Post
    async uploadPost(req, res) {
        try {
            const postData = req.body;
            const result = await Post_Service.uploadPost(postData);

            res.status(201).json({
                success: true,
                message: 'Post uploaded successfully',
                data: result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // View All Posts
    async getAllPosts(req, res) {
        try {
            const posts = await Post_Service.getAllPosts();

            res.status(200).json({
                success: true,
                count: posts.length,
                data: posts
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new Post_Controller();
