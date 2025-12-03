const express=require('express');
const { handleAddPost,handleGetPostWithID,handleDeletePostWithID,handleViewAllPost,handleUpdatePostWithID } = require('../controllers/postController');
const router=express.Router();

//post router
router.get("/",handleViewAllPost)
router.post("/add",handleAddPost)
router.route("/:id")
.get(handleGetPostWithID)
.put(handleUpdatePostWithID)
.delete(handleDeletePostWithID)

module.exports=router;
