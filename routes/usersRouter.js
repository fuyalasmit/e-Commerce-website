const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("userouterjs is working");
});

module.exports = router;