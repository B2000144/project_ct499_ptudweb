const conn = require('../config/database');
const {getAllUsers} = require("../services/CRUDService");
const getHomepage =  async (req,res) =>{
    let results = await getAllUsers();
   return res.render('home.ejs',{listUsers: results});
    
}
const getCreatePage = (req,res) =>{
    res.render('create.ejs');
}
const postCreateUser = async (req,res) =>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    console.log(req.body);
    // console.log(">>>>>>>> trả về",fname, email);
    let [results,fields] = await conn.execute( `INSERT INTO User (email, name, city) VALUES (?,?,?)`, [email,fname,lname],);
    console.log(">>>>check results:",results);
    res.send('success');

}


module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage
}
