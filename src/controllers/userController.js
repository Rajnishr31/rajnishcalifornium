const UserModel= require("../models/userModel")
const bookModel = require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


//Q
 const createBook = async function (req,res){
    let data1 = req.body
    let allBook = await bookModel.create(data1)
    res.send({msg:allBook})
 }


 const getBooksData = async function (req,res){
    let list= await bookModel.find()
    res.send({msg:list})
 }


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData