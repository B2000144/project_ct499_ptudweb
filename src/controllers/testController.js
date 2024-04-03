const conn = require('../config/database');

const getHomepage = (req,res) =>{
    res.render('home.ejs');
}
const postCreateUser = (req,res) =>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    // console.log(req.body);
    // console.log(">>>>>>>> trả về",fname, email);
    conn.query(
        `INSERT INTO User (email, name, city) VALUES (?,?,?)`,
        [email,fname,lname],
        function(err,results){
            console.log(err);
            res.send('success');
        }
    )
}


module.exports = {
    getHomepage,
    postCreateUser,
}
