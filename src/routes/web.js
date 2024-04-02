const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('sample.ejs'); //gọi giao diện từ ejs 
})
router.get('/test', (req, res) => {
    res.send("trang test");
})

module.exports = router;