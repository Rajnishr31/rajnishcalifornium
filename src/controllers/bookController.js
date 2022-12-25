const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModal = require("../models/publisherModel")

/*3. Write a POST api that creates a book from the details in the request body.The api takes both the author and publisher from the request body. 
In this api, you have to write a logic that validates the following:
The authorId is present in the request body.If absent send an error message that this detail is required
If present, make sure the authorId is a valid ObjectId in the author collection.A valid ObjectId in author collection means that a document must exist with this id.If not then send an error message that the author is not present.
The publisherId is present in the request body.If absent send an error message that this detail is required
If present, make sure the publisherId is a valid ObjectId in the publisher collection.If not then send an error message that the publisher is not present.*/

const createBook = async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
    if (!authorId) {
        //console.log("a");
        res.send({ data: "author detailed is required" })
    }

    if (!publisherId) {
        res.send({ data: "publisher detailed is required" })
    }
    let authorDetail = await authorModel.findOne({ _id: authorId })
    if (!authorDetail) {
        res.send({ data: "author is not present" })
    }
    let publisherDetail = await publisherModal.findOne({ _id: publisherId })
    if (!publisherDetail) {
        res.send({ data: "publisher is not present" })
    }
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

module.exports.createBook = createBook

//4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

const allFetchBooks = async function (req, res) {
    let booksDetails = await bookModel.find().populate('author', "publisher")
    //let allBook = await bookModel.find().populate('publisher')
    res.send({ data: booksDetails })
}
module.exports.allFetchBooks = allFetchBooks

// const getBooksWithAuthorDetails = async function (req, res) {
//     let newBook=req.body
//     let specificBook = await bookModel.create(newBook)
//     res.send({data: specificBook})
//}
//module.exports.createBook= createBook

