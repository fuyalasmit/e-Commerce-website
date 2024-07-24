const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/eCom')
.then(()=>{
    console.log("connected");     // debugger instead of clog..
    
})
.catch((err)=>{
    console.log(err);
    
})

module.exports = mongoose.connection;     //eCom database ko control dinxa mongoose.connection le