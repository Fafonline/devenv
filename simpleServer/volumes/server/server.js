'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
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