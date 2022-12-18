const { count } = require("console")
const BookCollection = require("../models/bookModel1")
//Q1
const BookCollection5 = async function (req, res) {
    let data5= req.body

    let savedData3= await BookCollection.create(data5)
    res.send({msg: savedData3})
}
//Q2
const BookCollection4 = async function (req, res) {
    let savedData4= await BookCollection.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: savedData4})
}
//Q3
const BookCollection6 = async function (req, res) {
    let input = req.query.input

    let savedData6= await BookCollection.find({year:{$eq:input}})
    res.send({msg: savedData6})
}
//4
const BookCollection7 = async function (req, res) {
    let savedData7= await BookCollection.find({$or:[{bookName:"autoBiography8"},{year:2020}]})
    res.send({msg: savedData7})
}
//Q5
const BookCollection8 = async function (req, res) {
    let savedData8= await BookCollection.find({indianPrice:{$in:[100,200,500]}})
    res.send({msg: savedData8})
}
//Q6
const BookCollection9 = async function (req, res) {
    let savedData9= await BookCollection.find({$or:[{stockAvailable:true},{totalPages:500}]})
    res.send({msg: savedData9})
}

module.exports.BookCollection5= BookCollection5
module.exports.BookCollection4= BookCollection4
module.exports.BookCollection6= BookCollection6
module.exports.BookCollection7= BookCollection7
module.exports.BookCollection8= BookCollection8
module.exports.BookCollection9= BookCollection9
