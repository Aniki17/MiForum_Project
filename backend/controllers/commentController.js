const express=require('express');

async function handleViewAllCommentsOnPost(req,res){
 res.send("view all comments");
}

async function handleAddCommentsonPost(req,res){
    res.send("Add a new comment")
}

async function handleViewSpecificComment(req,res){
    res.send(`getting a comment with ${req.params.commentid} on post with ${req.params.postid}`)
}

async function handleUpdateSpecificComment(req,res){
     res.send(`updating a comment with ${req.params.commentid} on post with ${req.params.postid}`)
}

async function handleDeleteSpecificComment(req,res){
     res.send(`deleting a comment with ${req.params.commentid} on post with ${req.params.postid}`)
}

module.exports={
    handleAddCommentsonPost,handleDeleteSpecificComment,handleUpdateSpecificComment,handleViewAllCommentsOnPost,handleViewSpecificComment
}