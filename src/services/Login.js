const connection = require('../database/db')

module.exports = async(username, password) =>{
   try{
      const query = `SELECT * FROM user WHERE username = ? AND password = MD5(?)`
      const values = [username, password];

      const result = await connection(query, values)

      return result
    } catch(err){
      return err
    }
}