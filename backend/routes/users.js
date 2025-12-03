const express=require('express');
const router=express.Router();
router.delete("/delete",(req,res)=>
{
    res.send("user deleted");
})

router.put("/update",(req,res)=>{
    res.send("User updated");

})
router.get("/post",(req,res)=>{
    res.send("Here are your post")
})
router.route("/:id").get((req,res)=>{
    res.send(`this is user number ${req.params.id}`);
}).put((req,res)=>{
    res.send(`user ${req.params.id} updated`);
}).delete((req,res)=>{
    res.send(`user ${req.params.id} deleted`);
})

module.exports=router;