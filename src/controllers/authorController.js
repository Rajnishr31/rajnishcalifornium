const AuthorModel= require("../models/authorModel")


//1. Write a POST api that creates an author from the details in request body

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}



module.exports.createAuthor= createAuthor
