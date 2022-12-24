const mongoose=require('mongoose');

let ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema=new mongoose.Schema({
    userId:{type:ObjectId,
    ref:"User1"},
    productId:{type:ObjectId,
    ref:"product"},
    amount:{
        type:Number,
        default:0
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    },

    date:Date
        
    


},{timestamps:true})
module.exports=mongoose.model("order",orderSchema)
