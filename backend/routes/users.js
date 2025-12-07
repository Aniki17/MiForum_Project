
const express = require('express');
const router = express.Router();
const { handleDeleteMe,handleGetMe,handleUpdateMe,handleGetUserByID,handleUpdateUserByID,handleDeleteUserByID}=require('../controllers/usersController');

router.get("/me",handleGetMe);

router.put("/me/update",handleUpdateMe);

router.delete("/me/delete",handleDeleteMe);

router.route("/:id")
.get(handleGetUserByID)
.put(handleUpdateUserByID)
.delete(handleDeleteUserByID)

module.exports = router;
