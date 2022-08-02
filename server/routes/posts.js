import express from 'express';

const router = express.Router();

// 1) callback executed is on localhost:5000/ 
   // req = request
   // res = response
      // reached through http://localhost:5000/posts
router.get('/', (req, res) => {
   res.send('THIS WORKS!'); 
})

export default router; 