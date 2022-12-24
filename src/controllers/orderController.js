const orderModel=require('../models/orderModel');
const productModel = require('../models/productModel');
const userModel = require('../models/userModel');


const createOrder= async function(req,res){
   
    let header=req.headers["isfreeappuser"];
    if(header==="true"){
       req.body.isFreeAppUser=true;
        let orderData= await orderModel.create(req.body);
    res.send({data:orderData});
    };
    if(header==="false"){
        let productDetails=await productModel.findOne({_id:req.body.productId}).select({price:1,_id:0});
        let price=productDetails.price;
        let userDetails=await userModel.findOne({_id:req.body.userId}).select({balance:1,_id:0});
        let balance=userDetails.balance;

        if(price>balance){
            res.send({message:"insufficient Balance"});
        }else{
            let updateBalance= await userModel.findOneAndUpdate({_id:req.body.userId},{$inc:{balance:-price}},{new:true});
            console.log(updateBalance)
            req.body.amount=price;
            req.body.isFreeAppUser=false;
            let orderData= await orderModel.create(req.body);
            res.send({data:orderData});
        }


        
    }
    


};
module.exports.createOrder=createOrder;

const getOrderDetails= async function(req,res){

let orderDetails=await orderModel.find().populate("userId").populate("productId");

res.send({bill:orderDetails})

};
module.exports.getOrderDetails=getOrderDetails