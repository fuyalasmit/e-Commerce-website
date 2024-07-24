//seperation of concern model
const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String, 
        minLength: 3,
        trim: true,
        required: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    profilePic: String,
    gstin: String    //Goods and Services Tax Identification Number
});

module.exports = mongoose.model("owner", ownerSchema);