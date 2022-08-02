import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// 1) callback executed is on localhost:5000/ 
   // req = request
   // res = response
      // reached through http://localhost:5000/posts
router.get('/', getPosts)
router.post('/', createPost)

export default router; 