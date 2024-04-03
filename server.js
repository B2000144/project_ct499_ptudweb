require('dotenv').config()
const express = require('express');
const webRoutes = require('./src/routes/web')
const app = express();
const configViewEngine = require('./src/config/viewEngine');
const conn = require('./src/config/database');

conn.query('SELECT * FROM User ',
function (err, result,fields) {
  console.log("<<<<result",result);
}
);

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
