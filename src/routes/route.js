const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel = require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

//Q1
router.post("/createBook",UserController.createBook)
router.get("/getBooksData",UserController.getBooksData)
module.exports = router;