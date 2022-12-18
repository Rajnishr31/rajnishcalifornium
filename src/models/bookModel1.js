const mongoose = require('mongoose');

const bookCollectionSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        require:true},

    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{type:Number, default:2021},
    totalPages:Number,
    stockAvailable:Boolean
    
}, { timestamps: true });


module.exports = mongoose.model('BookCollection', bookCollectionSchema)