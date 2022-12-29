const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleware/auth")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)
router.get("/users/:userId",middleWare.authentication, userController.getUserData)

router.put("/users/:userId",middleWare.authentication,middleWare.authorise, userController.updateUser)
router.delete('/deleted/:userId',middleWare.authentication,middleWare.authorise, userController.deleteUser)

module.exports = router;