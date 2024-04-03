const conn = require('../config/database');

const getHomepage = (req,res) =>{
    res.render('home.ejs');
}
const postCreateUser = (req,res) =>{
    console.log(req.body);
    res.send("trang tạo mới user");
}
module.exports = {
    getHomepage,
    postCreateUser,
}
