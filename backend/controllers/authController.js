const express=require('express');
async function handleRegister(req,res) {
     res.send("Register by filling the form below")
}

async function handleLogin(req,res){
res.send("Enter username and password")
}
module.exports={
    handleRegister,handleLogin
}