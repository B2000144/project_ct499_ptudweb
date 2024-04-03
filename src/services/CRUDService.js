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
const updateUserById = async (email,name,city,idUser)=>{
    let [results,fields] = await conn.query( `UPDATE  User SET email = ?, name = ?, city = ? WHERE id =  ?`, [email,name,city,idUser],);

}
module.exports ={
    getAllUsers,
    getIdUsers,
    updateUserById,
}