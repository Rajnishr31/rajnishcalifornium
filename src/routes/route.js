const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookCollectionController = require("../controllers/bookCollectionController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
//Q1
router.post("/BookCollection5", BookCollectionController.BookCollection5  )
//Q2
router.get("/BookCollection4", BookCollectionController.BookCollection4  )
//Q3
router.post("/BookCollection6", BookCollectionController.BookCollection6  )
//4
router.get("/BookCollection7", BookCollectionController.BookCollection7  )
//Q5
router.get("/BookCollection8", BookCollectionController.BookCollection8  )
//Q6
router.get("/BookCollection9", BookCollectionController.BookCollection9  )
module.exports = router;