const { query } = require('express')
const mysql = require('mysql')


const dbConfig = {
    host:"localhost",
    user: "root",
    password: "",
    port : 3307,
    database: "pracjs"
}

const db = mysql.createConnection(dbConfig)


module.exports = (query) => {
    return new Promise((resolve, reject) => {
        db.connect((error) =>{
            if(error) {
                reject(error)
            } else{
                db.query(query, (error, result) => {
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