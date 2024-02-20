const connection = require('../database/db')

module.exports = async(id) =>{
   try{
      const query = `SELECT * FROM user WHERE id = ?`

      const result = await connection(query, id)

      return result
    } catch(err){
        console.log(err)
      return err
    }
}