const express = require("express");
const router = express.Router();

router.get("./",(req,res)=>{
    res.sender("index");
})

module.exports = router;