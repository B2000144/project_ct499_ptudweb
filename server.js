require('dotenv').config()
const express = require('express');
const webRoutes = require('./src/routes/web')
const app = express();
const configViewEngine = require('./src/config/viewEngine');
const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  port:3307,
  user: 'root',
  password:'123456',
  database: 'hoidanit',
});
conn.query('SELECT * FROM User ',
function (err, result,fields) {
  console.log("<<<<result",result);
  console.log("<<<<fields",fields);
}
)
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// import các thư mục public
configViewEngine(app);
//test connection

// khai báo route
app.use(webRoutes);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
