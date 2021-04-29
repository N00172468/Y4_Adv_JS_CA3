require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}));
app.listen(4000, ()=> console.log('Le Serveur a commence a : 4000'));

var articlesRoutes = require('./controllers/articlesController');
app.use('/articles', articlesRoutes);