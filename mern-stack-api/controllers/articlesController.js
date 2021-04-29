const { Router } = require('express');
const express = require('express');

var router = express.Router();
var objectID = require('mongoose').Types.ObjectId;
var { Article } = require('../models/articles');

// GET REQUEST:
router.get('/', (req, res)=>{
    Article.find((err,docs)=>{
        if (!err) 
            res.send(docs);
        else
            console.log('Error while retrieving all records: ' + JSON.stringify(err, undefined, 2));
    });
});

// POST REQUEST:
router.post('/', (req, res)=>{
    var newRecord = {
        title: req.body.title,
        content: req.body.content
    };

    newRecord.save((err, doc)=>{
        if (!err) 
            res.send(docs);
        else
            console.log('Error while creating new record: ' + JSON.stringify(err, undefined, 2));
    });
});

// PUT/UPDATE REQUEST:
router.put('/:id', (req, res)=>{
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('No record with given ID: ' + req.params.id);

    var updatedRecord = {
        title: req.body.title,
        content: req.body.content
    };

    Article.findByIdAndUpdate(req.params.id, {$set:updatedRecord}, (err, doc)=>{
        if (!err)
            res.send(docs);
        else
            console.log('Error while updating current record: ' + JSON.stringify(err, undefined, 2));
    });
});

// DELETE REQUEST:


module.exports = router;