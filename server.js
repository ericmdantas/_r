"use strict";

const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const app = express();

let port = process.env.PORT || 3333;

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/client/dev'));

app.get('/', (req, res) => {
  res.type('html');

  fs.createReadStream(path.join(__dirname, '/client/dev/index.html'))
    .pipe(res);
});

http.createServer(app, () => {})
    .listen(port);
