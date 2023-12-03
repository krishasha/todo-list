const express = require("express");
const router = express.Router();

//home route
router.get("/",(req,res)=>{
   res.render('index', { title: 'HOme page'})

});
router.get("/add",(req,res)=>{
    res.render("add_users", { title: "Add Users"});

});

module.exports= router;