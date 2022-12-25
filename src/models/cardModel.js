const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({

    cardNumber: String,
    cardType: {
        type: String,
        enum: ['REGULAR', 'SPECIAL']

    },
    customerName: String,
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    },
    vision: String,
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"

    },
    isDeleted: {
        type: Boolean,
        default: false
    }


},{timestamps:true});
module.exports = mongoose.model("card", cardSchema)