const express = require('express');
const wax = require("wax-on");
const hbs = require('hbs');


// 1. Setup Express
const app = express();

// 1a. Setup View Engine
app.set('view engine', 'hbs');

// 1b. Setup Static Folder
app.use(express.static('public'));

// 1c. Setup Wax-on, template inheritance 
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// 2. routes

app.get("/", function(req,res){
    res.render("index")
})

app.get("/about-us", function(req,res){
    res.render("about-us")
})

app.get("/contact-us", function(req,res){
    res.render("contact-us")
})

// 3. start server
app.listen(3000, ()=>{
    console.log("server has started")
})



