const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
//const commonMW = require ("../middlewares/commonMiddlewares")
const productController = require("../controllers/productContoller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//Q1
router.post("/product", productController.product  )
//.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

module.exports = router;