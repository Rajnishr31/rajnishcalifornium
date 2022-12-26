const MUUID = require('uuid-mongodb')

const mongoose = require('mongoose');
const email = require('mongoose-type-email')

const customerSchema = new mongoose.Schema({

    firstName: String,
    SecondName: String,
    mobileNumber: {
        type: Number,
        minLength: 10,
        maxLength: 10
    },
    DOB: Date,
    emailId: {
        type: email,
        unique:true
    },
    address: String,
    customerID:{
        type:String,
        default:MUUID.v1()
    },
    Status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });

module.exports = mongoose.model("customer", customerSchema);