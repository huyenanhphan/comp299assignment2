let mongoose = require('mongoose');
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    email: String,
    number: Number,
},

{
    collection:"books"
});

module.exports = mongoose.model('book',bookModel);