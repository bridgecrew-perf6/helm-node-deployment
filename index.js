'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.0.0.1';

// App
const app = express();
app.get('/', (req, res) => {
  let responseCode = 200;
  console.log('>>>>>>>>> inside app')
  try{
    JSON.parse("Hello world");
    //JSON.parse('{"message": "Hello world"}');
  }catch(e){
    responseCode = 500;
    console.log('Raw message --> \n', e.stack)
    console.log('Stringfy One --> \n', JSON.stringify(e.stack));
  }
  res.sendStatus(responseCode);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);