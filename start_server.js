const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./build_webpack'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build_webpack', 'index.html'));
});

app.listen(9000);
