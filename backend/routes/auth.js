const express=require('express');
const router=express.Router();
const {handleLogin}=require('../controllers/authController')
const {handleRegister}=require('../controllers/authController')

router.post("/register",handleRegister)

router.post("/login",handleLogin)

module.exports=router;