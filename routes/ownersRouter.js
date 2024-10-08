const express = require("express");
const router = express.Router();
const ownersModel = require("../models/ownersModel")

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        let owners = await ownersModel.find();
        if (owners.length > 0) {
            return res
                .send(500)
                .send("You don't have permission to create new owner.");
        }

        let { fullname, email, password } = req.body;

        let createdOwner = await ownersModel.create({
            fullname,
            email,
            password,
        });

        res.status(201).send(createdOwner);
    });
}

router.get("/admin", (req, res) => {
    let success = req.flash("success");
    res.render("createproducts", { success });
});


module.exports = router;