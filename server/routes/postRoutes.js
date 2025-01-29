import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
    createPost,
    getPosts,
    getPost,
    likePost,
    commentPost
} from '../controllers/postController.js';

const router = express.Router();

router.route('/')
    .post(protect, createPost)
    .get(getPosts);

router.route('/:id')
    .get(getPost);

router.route('/like/:id')
    .put(protect, likePost);

router.route('/comment/:id')
    .post(protect, commentPost);

export default router;