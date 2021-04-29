const express = require('express');

var router = express.Router();
var { Article } = require('../models/articles');

router.get('/', (req, res)=>{
    articles.find((err,docs)=>{
        if(!err) 
        res.send(docs);
        else
        console.log('Error while retrieving all records: ' + JSON.stringify(err, undefined, 2));
    });
});