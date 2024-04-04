const { render } = require('pug');
const conn = require('../config/database');
const {getAllUsers,getIdUsers,updateUserById} = require("../services/CRUDService");
const getHomepage =  async (req,res) =>{
    let results = await getAllUsers();
   return res.render('home.ejs',{listUsers: results});
    
}
const getCreatePage = (req,res) =>{
    res.render('create.ejs');
}
const getUpdatePage = async (req,res) =>{
    const idUser = req.params.id;
    let user = await getIdUsers(idUser)
    // console.log("check lay id: ",results);
   return res.render('update.ejs', {listIdUser: user});
}
const postUpdateUser= async (req,res) =>{
    let idUser = req.body.idUser;
    let name = req.body.name;
    let email = req.body.email;
    let city= req.body.city;
    await updateUserById(email,name,city,idUser);
    res.redirect('/');
};
const postDeleteUser = async (req, res) =>{
    const idUser = req.params.id;
    let user = await getIdUsers(idUser)
    res.render('delete.ejs',{listIdUser: user});
}
const  postHandleRemoveUser = (req, res) =>{
    res.send("ok deleted");

}
const postCreateUser = async (req,res) =>{
    let name = req.body.name;
    let email = req.body.email;
    let city= req.body.city;
    console.log(req.body);
    // console.log(">>>>>>>> trả về",fname, email);
    let [results,fields] = await conn.query( `INSERT INTO User (email, name, city) VALUES (?,?,?)`, [email,name,city],);
    console.log(">>>>check results:",results);
    res.send('tạo mới hoàn thành');

}


module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}
