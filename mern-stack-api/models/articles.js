const mongoose = require('mongoose');

var articles = mongoose.model('articles',
{
    title: {type : String},
    body: {type : String},
});

module.exports = {articles};