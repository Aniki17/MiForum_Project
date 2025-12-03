const express=require('express');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post')
const commmentRouter=require('./routes/comments')


const app=express();
const port=5050;

app.use("/users",userRouter)
app.use("/auth",authRouter)
app.use("/posts",postRouter)
app.use("/:postid/comments",commmentRouter)

app.get("/ownProfile",(req,res)=>{
    res.send("This is your profile page");
})
app.listen(port, () => {
    console.log(`server running on ${port}`);
});


