const { count } = require("console")
const productModel = require("../models/productModel")


const createProduct= async function (req, res) {
    
    let data= req.body

    let productData= await productModel.create(data)
    res.send({data: productData})
}
module.exports.createProduct=createProduct;


