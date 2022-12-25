const cardModel = require("../models/cardModel");



const createCard= async function(req,res){
    const body=req.body;
    const cardData=await cardModel.create(body);
    res.send({data:cardData})
};
module.exports.createCard= createCard;


const getCard= async function(req,res){
    const cardData=await cardModel.find();
    res.send({data:cardData})
};
module.exports.getCard=getCard;