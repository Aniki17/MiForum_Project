const express=require('express');
const router=express.Router();
const {handleAddCommentsonPost,handleDeleteSpecificComment,handleUpdateSpecificComment,handleViewAllCommentsOnPost,handleViewSpecificComment}=require('../controllers/commentController')
//comment router
router.get("/",handleViewAllCommentsOnPost)
router.post("/add",handleAddCommentsonPost)

router.route("/:commentid")
.get(handleViewSpecificComment)
.put(handleUpdateSpecificComment)
.delete(handleDeleteSpecificComment)


module.exports=router;