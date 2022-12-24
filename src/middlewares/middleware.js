
const { json } = require("body-parser");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const headerValidator=function(req,res,next){
    let header=req.headers["isfreeappuser"];
    
    if(!header){
       res.send({message:"Mandatory header is missing"})
        
    }else{
       
        next();
    }
};
module.exports.headerValidator=headerValidator;

const userAndProductValidator= async function(req,res,next){
        let {userId,productId}=req.body;
        let userDetails= await userModel.findOne({_id:userId});
        let productDetails= await productModel.findOne({_id:productId});
        if(!userDetails || !productDetails){
            res.send({message:"either productId or userId is not valid, maybe both "});
        }else{
            next();
        };


};
module.exports.userAndProductValidator=userAndProductValidator;
