//NODE + ES6 SERVER

import http from 'http';
import path from 'path';
import express from 'express';

const app = express();
const PORT = 3000;

//middlewares

app.use('/0-world', express.static(__dirname + '/0-world/'));
app.use('/data', express.static(__dirname + '/data/'));	

//routes

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/0-world/index.html'));
});

//listen
app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});