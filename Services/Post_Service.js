const Post_Schema = require('../Models/Post_Schema');

class Post_Service {

    // Upload Post
    async uploadPost(postData) {
        try {
            const { Post_url, Admin_Profile } = postData;

            if (!Post_url) throw new Error('Post URL is required');
            if (!Admin_Profile) throw new Error('Admin Profile ID is required');

            const newPost = new Post_Schema({
                Post_url,
                Admin_Profile
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
            const posts = await Post_Schema.find()
                .populate('Admin_Profile', 'name email role')
                .sort({ createdAt: -1 });

            return posts;
        } catch (error) {
            throw new Error(error.message || 'Error fetching posts');
        }
    }

}

module.exports = new Post_Service();
