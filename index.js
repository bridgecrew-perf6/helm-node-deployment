'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log('>>>>>>>>> inside main')
  res.send(JSON.parse('{"message": "Hello world"}'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);