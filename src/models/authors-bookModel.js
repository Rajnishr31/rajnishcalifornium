const { MongoExpiredSessionError } = require("mongodb");
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName: String, 
    author_Id: {type:Number,
        require:true},  
    age:Number,
    address:String
}, { timestamps: true });


const bookSchema = new mongoose.Schema( {
    name: String, 
    author_Id: {type:Number,
        require:true},  
    price:Number,
    rating:Number
}, { timestamps: true });



const book = mongoose.model('bookDetail', bookSchema); 
const author = mongoose.model('AuthorDetail', authorSchema); 
module.exports = {bookschema:book,authorSchema:author}