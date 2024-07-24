const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require('./config/mongooseConnection');
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");


const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");


app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);



app.get("/",(req,res)=>{
    res.send("HI");
});

app.listen(3000);