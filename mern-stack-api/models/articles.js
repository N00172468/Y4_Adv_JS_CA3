const mongoose = require('mongoose');

var Article = mongoose.model('Article',
{
    title: {type : String},
    content: {type : String},
});

module.exports = {Article};