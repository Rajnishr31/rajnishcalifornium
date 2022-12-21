const { count } = require("console")
const authorsModel= require("../models/authors-bookModel")
//Q1

const updateAuthorDetails= async function (req, res) {
    let data = req.body 
    let allAuthor= await authorsModel.create(data) 
     res.send( { msg: allAuthor})
}
// Q2
const getBookDetails = async function (req, res) {
    let bookList = await authorsModel.findOne({authorName:"Chetan Bhagat"})
let bookByAuthor = await authorsModel.find({author_id:bookList.author_id})
     res.send( { msg:bookList})
}
module.exports.updateAuthorDetails= updateAuthorDetails
module.exports.getBookDetails= getBookDetails