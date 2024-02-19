const express = require("express")
const router = express.Router()

const RegisterService = require('../services/Register')
const LoginService = require('../services/Login')

//Register Account
router.post(`/register`, async(req, res) => {
    const {fullname, username, password} = req.body

    const result = await RegisterService(fullname, username, password)

    if(result){
        res.status(200).json({
            "message": "success"
        })
    }else{
        res.status(400).json({
            "error": "Error creating account"
        })
    }
})

//Login Account
router.post('/login', async(req, res) => {
    const {username, password} = req.body
    const result = await LoginService(username, password)

    if(result){
        console.log(result)
        res.status(200).json({
            "message": "success"
        })
    }else{
        res.status(401).json({
            "error": "Error logging in"
        })
    }
})

module.exports = router