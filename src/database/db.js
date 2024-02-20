const mysql = require('mysql')

//create database connection configuration
const dbConfig = {
    host:"localhost",
    user: "root",
    password: "",
    port : 3307,
    database: "pracjs"
}

//create database connection
const db = mysql.createConnection(dbConfig)

//connect to the database
module.exports = (query, values) => {
    return new Promise((resolve, reject) => {
        db.connect((error) =>{
            if(error) {
                reject(error)
            } else{
                db.query(query, values, (error, result) => {
                    if(error){
                        reject(error)
                    }else{
                        resolve(result)
                    }
                })
            }
        })
    })
}