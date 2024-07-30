const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
        required: true
    },
    email: String,
    password: String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
    ],
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    profilePic: String
});

module.exports = mongoose.model("user", userSchema);