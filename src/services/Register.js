const connection = require('../database/db')

module.exports = async (fullname, username, password) =>{
   
   try{
      const query = `INSERT INTO ` +
                      `user ` +
                      `VALUES ` +
                        `(null, '${username}', md5('${password}'), NOW(), '${fullname}')`
      await connection(query)
      
      return true
    } catch(err){
      console.log(err);
      return false
    }
}