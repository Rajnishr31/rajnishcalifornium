const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher", publisherController.createPublisher )
router.post("/createBook", bookController.createBook )
//router.post("/createNewBook",bookController.getBooksWithAuthorDetails)
router.get("/createBook1", bookController.allFetchBooks )
module.exports = router;