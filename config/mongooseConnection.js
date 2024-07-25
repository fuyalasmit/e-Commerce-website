const mongoose = require("mongoose");
const config = require("config");

const dbgr = require("debug")("development:mongoose");

mongoose.connect(`${config.get("MONGODB_URI")}/eCom`)
.then(()=>{
    dbgr("connected");     // debugger instead of clog..
    
})
.catch((err)=>{
    dbgr(err);
    
})

module.exports = mongoose.connection;     //eCom database ko control dinxa mongoose.connection le