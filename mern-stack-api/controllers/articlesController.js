const express = require('express');

var router = express.Router();
var { Article } = require('../models/articles');

router.get('/', (req, res)=>{
    Article.find((err,docs)=>{
        if(!err) 
        res.send(docs);
        else
        console.log('Error while retrieving all records: ' + JSON.stringify(err, undefined, 2));
    });
});

router.post('/', (req, res)=>{
    var newRecord = {
        title: req.body.title,
        content: req.body.content
    };

    newRecord.save((err, doc)=>{
        if(!err) 
        res.send(docs);
        else
        console.log('Error while creating new record: ' + JSON.stringify(err, undefined, 2));
    });
});


module.exports = router;