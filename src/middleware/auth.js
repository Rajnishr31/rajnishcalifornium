const jwt = require("jsonwebtoken");
//const userModel = require("../models/userModel");
let authentication = async function(req,res,next){
try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-californium-very-very-secret-key");
  req.decodedToken = decodedToken
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" })
    next();
}
catch(error){
  res.status(401).send({msg:error})
}}



const authorise = function(req, res, next) {
  try{
    let userToBeModified = req.params.userId
    let userLoggedIn = req.decodedToken .userId
    if(userToBeModified != userLoggedIn) return res.status(400).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    next()
}
catch(error){
  res.status(400).send({msg:error})
}
}

module.exports.authentication = authentication;
module.exports.authorise = authorise;