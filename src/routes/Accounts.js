const express = require("express")
const router = express.Router()


const CreateService = require('../services/Create')
const RetrieveService = require('../services/Retrieve')

router.post(`/register`, async(req, res) => {
    const {fullname, username, password} = req.body

    const result = await CreateService(fullname, username, password)

    if(result){
        res.status(200).json({
            "message": "Successful!"
        })
    }else{
        res.status(500).json({
            "message": "Error!"
        })
    }
})




/* Retrieve*/
router.post('/login', async(req, res) => {
    const {username, password} = req.body


    const result = await RetrieveService(username, password)

    if(result){
        console.log(result)
        res.status(200).json({
            "message": "Successful!"
        })
    }else{
        res.status(500).json({
            "message": "Error!"
        })
    }
})

module.exports = router