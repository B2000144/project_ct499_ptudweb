const path = require('path');
const express = require('express');
const configViewEngine = (app) =>{
    //config template engine 
app.set('views', path.join('./src', 'views'));//khai báo thư mục ejs
app.set('view engine', 'ejs'); // khai báo templates engine
//config static files các file có thể hiển thị trên web đồng thời dùng để dùng css html
app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;