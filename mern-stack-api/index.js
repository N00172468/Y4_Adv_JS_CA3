require('./db');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.listen(4000, ()=> console.log('Le Serveur a commence a : 4000'));