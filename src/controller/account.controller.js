const RegisterService = require('../services/Register')
const LoginService = require('../services/Login')
const GetUserService = require('../services/GetUser')

//Register Account
exports.register = async(req, res) => {
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
}


//Login Account
exports.login = async(req, res) => {
    const {username, password} = req.body
    const result = await LoginService(username, password)

    if(result){
        console.log(result[0].id)
        res.status(200).json({
            "message": "success",
            "userId": result[0].id
        })
    }else{
        res.status(401).json({
            "error": "Error logging in"
        })
    }
}

//Get User
exports.getUser = async(req, res) => {
    const {id} = req.body
    const result = await GetUserService(id)

    if(result){
        if(result[0]?.id){
            res.status(200).json({
                "message": "success",
                "username": result[0]?.username,
                "fullname": result[0]?.fullname
            })
        }else{
            res.status(401).json({
                "error": "User information not found"
            })
        }
    }else{
        res.status(401).json({
            "error": "User information not found"
        })
    }
}