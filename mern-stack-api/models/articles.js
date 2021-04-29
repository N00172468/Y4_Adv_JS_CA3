const mongoose = require('mongoose');

var Article = mongoose.model('Article',
{
    title: {type : String},
    body: {type : String},
});

module.exports = {Article};