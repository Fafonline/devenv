'use strict';

const express = require('express');
var path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Postman Functions Server' });
});

app.get('/functions', (req, res) => {
  const fs = require('fs');
  let functions;
  try {
    functions = fs.readFileSync('volumes/functions/functions.js', 'utf8');
    console.log(functions);
  } catch (err) {
    console.error(err);
  }

  res.send(functions);
});

app.get('/helloWorld', (req, res) => {
  const fs = require('fs');
  let functions;
  try {
    functions = fs.readFileSync('volumes/functions/helloWorld.js', 'utf8');
    console.log(functions);
  } catch (err) {
    console.error(err);
  }

  res.send(functions);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);