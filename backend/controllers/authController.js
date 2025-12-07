const bcrypt = require('bcryptjs');
const db=require("../config/db")
const express=require('express');


async function handleRegister(req,res){
    try{ username= req.body.username;
     password=req.body.password;
     email=req.body.email;
     hashed_password=await bcrypt.hash(password,10)
    const insert_query='INSERT INTO users (username,email,password_hash) values ($1,$2,$3)'
    await db.query(insert_query,[username,email,hashed_password])
    res.send("registration successful")
    }catch(error){
          console.error("Registration error:", error);
          res.status(500).send("error occurred");
        
    }
}

async function handleLogin(req,res){
 try{
   const user=await db.query('SELECT * FROM users where username=$1',[req.body.username])
   if(user.rows.length===0){
    return res.send('user doesnt exist')
    }
    const db_pass=user.rows[0].password_hash
    if(await bcrypt.compare(req.body.password,db_pass)){
     return res.send('Login Successful')
    }
    else{
        return res.status(500).send("incorrect password")
    }
  }catch{
    return res.status(500)
    }

}

    
   
  
module.exports={
    handleRegister,handleLogin
}