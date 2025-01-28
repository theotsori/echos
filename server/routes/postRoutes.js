import express from 'express';
const router = express.Router();
const PostController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, PostController.createPost);
router.get('/', authMiddleware, PostController.getPosts);
router.get('/:id', authMiddleware, PostController.getPost);
router.put('/:id/like', authMiddleware, PostController.likePost);
router.put('/:id/comment', authMiddleware, PostController.commentPost);

export default router;