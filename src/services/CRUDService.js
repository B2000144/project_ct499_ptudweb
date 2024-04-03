const conn = require("../config/database");

const getAllUsers = async ()=>{
    let [results, fields] = await conn.query('SELECT * FROM User');
    return results;
}
const getIdUsers = async (idUser)=>{
    let[results,fields] = await conn.query('SELECT * FROM User WHERE id = ?',[idUser]);
    let user = results && results.length > 0 ? results[0] :{};
    return user;
    
}
module.exports ={
    getAllUsers,
    getIdUsers
}