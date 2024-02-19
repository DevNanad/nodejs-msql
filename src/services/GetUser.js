const connection = require('../database/db')

module.exports = async(id) =>{
   try{
      const query = `SELECT * FROM user WHERE id = '${id}'`

      const result = await connection(query)

      return result
    } catch(err){
        console.log(err)
      return err
    }
}