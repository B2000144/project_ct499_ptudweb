require('dotenv').config()
const express = require('express');
const webRoutes = require('./src/routes/web')
const app = express();
const configViewEngine = require('./src/config/viewEngine');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// import các thư mục public
configViewEngine(app);

// khai báo route

app.use(webRoutes);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
