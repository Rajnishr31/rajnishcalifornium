const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");




const createUser = async function (req, res) {
  try{
  let data = req.body;
  if(Object.keys(data) != 0){
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
}
else{res.status(400).send({msg:"BAD REQUEST"})}}
catch(error){
  res.status(400).send({msg:"Error",error:error.message})
}

}




const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
// if(!userName&&!password){
//   res.send({msg:"user name or password are unavailable"})
// }
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    })
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, data: token });
  }
  catch(error){
    res.status(400).send({msg:error})
  }
}



const getUserData = async function (req, res) {
  try{

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
catch(error){
  res.status(400).send({msg:error})
}}




const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(400).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: updatedUser, data: updatedUser });
}
catch(error){
  res.status(400).send({msg:error})
}}


const deleteUser = async function (req, res) {
 
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
