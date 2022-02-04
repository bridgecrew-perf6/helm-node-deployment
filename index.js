'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.0.0.1';

// App
const app = express();
app.get('/', (req, res) => {
  console.log('>>>>>>>>> inside app')
  res.send(JSON.parse("Hello world"));
  //res.send(JSON.parse('{"message": "Hello world"}'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);