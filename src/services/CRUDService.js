const conn = require("../config/database");

const getAllUsers = async ()=>{
    let [results, fields] = await conn.query('SELECT * FROM User');
    return results;
}
module.exports ={
    getAllUsers
}