const express=require('express');

async function handleGetMe(req,res){
    res.send("Here is your profile");
}

async function handleUpdateMe(req,res){
    res.send("User updated");
}

async function handleDeleteMe(req,res){
    res.send("User deleted");
}

async function handleGetUserByID(req,res){
 res.send(`this is user number ${req.params.id}`);
}
async function handleUpdateUserByID(req,res){
 res.send(`Updated user with id ${req.params.id}`);
}
async function handleDeleteUserByID(req,res){
 res.send(`User with id ${req.params.id} deleted`);
}

module.exports={
    handleDeleteMe,handleGetMe,handleUpdateMe,handleGetUserByID,handleUpdateUserByID,handleDeleteUserByID
}




