const express = require('express');
const router = express.Router();
const customerController=require('../controllers/customerController copy')
const cardcontroller=require('../controllers/cardController')
const middlewares=require('../middleware/middleware')

router.post("/createCustomer",customerController.createCustomer)

router.get("/getCustomer",customerController.getCustomer)

router.put("/updateCustomer",customerController.updateCustomer)

router.put("/deleteCustomer",customerController.deleteCustomer)


router.post("/createCard",middlewares.mid1,middlewares.mid2,cardcontroller.createCard)
router.post("/getCard",cardcontroller.getCard)

