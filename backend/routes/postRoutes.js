const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const authenticate = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/roleMiddleware');

// Public: View posts
router.get('/', authenticate, getAllPosts);

// Admin: Create, update, delete posts
router.post('/', authenticate, authorizeRole('admin'), createPost);
router.put('/:id', authenticate, authorizeRole('admin'), updatePost);
router.delete('/:id', authenticate, authorizeRole('admin'), deletePost);

module.exports = router;
