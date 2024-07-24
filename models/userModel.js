const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/eCom');

const userSchema = mongoose.Schema({
    fullname: {
        type: String, 
        minLength: 3,
        trim: true,
        required: true
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    userOrders: {
        type: Array,
        default: []
    },
    contact: Number,
    profilePic: String
});

module.exports = mongoose.model("user", userSchema);