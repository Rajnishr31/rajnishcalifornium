const UserModel= require("../models/userModel")





const createUser= async function (req, res) {
    let body= req.body
    let userData= await UserModel.create(body)
    res.send({data: userData})
}
module.exports.createUser= createUser
