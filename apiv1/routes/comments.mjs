



import express from 'express';
let router = express.Router()

// GET  /api/v1/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })
  
  // GET /api/v1/comments/:postId
  router.get(' /comment/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })
  
  // PUT /api/v1/comment/:postId/:commentId
  router.delete('/comment/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })
  
  // DELETE    /api/v1/comment;'postId/ommentId
  router.put('/comment;postId/ommentId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })


  export default router