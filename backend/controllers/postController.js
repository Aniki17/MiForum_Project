const express=require('express');
async function handleViewAllPost(req,res){
  res.send("these are the posts everyone has created")
}

async function handleAddPost(req,res){
  res.send("Enter post title,content")
}

async function handleGetPostWithID(req,res){
    res.send(`this is the post with id ${req.params.id}`)
}

async function handleUpdatePostWithID(req,res){
    res.send(`update post with id ${req.params.id}`)
}
async function handleDeletePostWithID(req,res){
    res.send(`delete the post with id ${req.params.id}`)
}
module.exports={
    handleAddPost,handleDeletePostWithID,handleGetPostWithID,handleUpdatePostWithID,handleViewAllPost
}
