const getTestpage = (req,res)=>{
    res.send('trang test');
}
const getHomepage = (req,res) =>{
    res.render('sample.ejs');
}
module.exports = {
    getTestpage,
    getHomepage
}