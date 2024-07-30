const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", function (req, res) {
    let error = req.flash("error");
    res.render("index", { error });
});

router.get("/shop", isLoggedIn, (req, res) => {
    res.render("shop");
});
router.get("/logout", isLoggedIn, (req, res) => {
    
});

module.exports = router;