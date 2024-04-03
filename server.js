require('dotenv').config()
const express = require('express');
const webRoutes = require('./src/routes/web')
const app = express();
const configViewEngine = require('./src/config/viewEngine');
const conn = require('./src/config/database');



const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// import các thư mục public
configViewEngine(app);

//config req.body lấy dữ liệu từ input
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // 

// khai báo route
app.use(webRoutes);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
