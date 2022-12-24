const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")

const middleware = require ("../middlewares/middleware")



router.post("/createUser", middleware.headerValidator, UserController.createUser )
router.post("/createProduct", productController.createProduct  )
router.post("/createOrder",middleware.headerValidator,middleware.userAndProductValidator,orderController.createOrder)
router.get("/getOrderDetails",orderController.getOrderDetails)



module.exports = router;