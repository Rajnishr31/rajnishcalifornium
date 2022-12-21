const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const authorController = require("../controllers/authorController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {

    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)

    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x = dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good" })
})
//Q1
router.post("/createAuthors", authorController.updateAuthorDetails)
router.post("/createBooks", authorController.updateBookDetails)
//Q2
//List out the books written by "premchand" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
router.get("/findBooks", authorController.getBookDetails)
module.exports = router;