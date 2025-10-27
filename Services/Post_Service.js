const Post_Schema = require('../Models/Post_Schema');

class Post_Service {

    // Upload Post
    async uploadPost(postData) {
        try {
            const { Post_url } = postData;

            if (!Post_url) throw new Error('Post URL is required');

            const newPost = new Post_Schema({
                Post_url
            });

            await newPost.save();
            return newPost;
        } catch (error) {
            throw new Error(error.message || 'Error uploading post');
        }
    }

    // Get All Posts
    async getAllPosts() {
        try {
            const posts = await Post_Schema.find();

            return posts;
        } catch (error) {
            throw new Error(error.message || 'Error fetching posts');
        }
    }

}

module.exports = new Post_Service();
