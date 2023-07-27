






import express from 'express';
let router = express.Router()

// GET /api/v1/post/:userId/:postId
router.get('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })
  // GET /api/v1/posts/:userId
  router.get('/posts/:userId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })
  // POST /api/v1/post
  router.post('/post', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })
  // PUT /api/v1/post/:userId/:postId
  router.put('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next() 
  })
  // DELETE /api/v1/post/:userId/:postId
  router.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
   res.send('post created');
   next()
  })

  
  export default router