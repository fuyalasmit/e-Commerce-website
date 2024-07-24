const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("productrouterjs is working");
});

module.exports = router;