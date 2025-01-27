const Post = require('../models/post');
const User = require('../models/user');

const createPost = async (req, res) => {
    const { text } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost = new Post({
            text,
            user: req.user.id
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const commentPost = async (req, res) => {
    const { text } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id);
        const newComment = {
            text,
            user: req.user.id
        };
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { createPost, getPosts, getPost, likePost, commentPost };
