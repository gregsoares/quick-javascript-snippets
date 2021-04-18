const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
app.use(express.static(path.join(__dirname, './')));

// routes
app.get('/', function (req, res) {
  res.send('index.html');
});

// start the server
app.listen(port, function () {
  console.log('app started');
});
