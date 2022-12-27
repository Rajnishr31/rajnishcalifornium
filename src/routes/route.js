const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware= require("../middleware/auth")




router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.mid1, userController.getUserData)

router.put("/users/:userId",middleware.mid1, userController.updateUser)
router.delete("/deleted/:userId",middleware.mid1, userController.deleteUser)

module.exports = router;