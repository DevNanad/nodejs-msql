const connection = require('../database/db')

module.exports = async(username, password) =>{
   try{
      const query = `SELECT * FROM user WHERE username = '${username}' AND password = MD5('${password}')`

      const result = await connection(query)

      return result
    } catch(err){
      return err
    }
}