const connection = require('../database/db');

module.exports = async (fullname, username, password) => {
    try {
        const query = `
            INSERT INTO user 
            SET username = ?, password = md5(?), created_at = ?, fullname = ?, role = ?`;
        const createdAt = new Date(); // Current timestamp
        const values = [username, password, createdAt, fullname, 'user'];

        await connection(query, values);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};