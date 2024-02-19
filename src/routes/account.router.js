const express = require("express")
const router = express.Router()

const {register, login, getUser} = require("../controller/account.controller") 

//Register Account
router.post(`/register`, register)

//Login Account
router.post('/login', login)

//Get User 
router.get('/user', getUser )

module.exports = router