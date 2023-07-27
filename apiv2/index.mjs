import express from 'express';
let router = express.Router()


// import authRouter  from './routes/auth.mjs'
import commentRouter  from './routes/comment.mjs'
import postRouter  from './routes/post.mjs'
import feedRouter  from './routes/feed.mjs'

// router.use("/api/v1", authRouter)


// router.use((req,res, next) => {
//   if(token === "valid"){
//     next();
//   }else{
//     res.send({message: "invalid token"})
//   }
// })




router.use( commentRouter)
router.use( postRouter)
router.use( feedRouter)


// router.post("/weather", (req, res, next) => {
//     console.log("req.body", req.body);
  
  
//     res.send({
//       message: "weather is normal",
//       apiVersion: "v2",
//       temp: 52,
//       min: 20,
//     })
  
  
//   })

  
export default router