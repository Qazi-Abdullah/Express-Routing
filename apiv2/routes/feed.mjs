

import express from 'express';
let router = express.Router()



// GET /api/v1/feed/:userId
router.put('/feed/:userId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })
  

  
  export default router