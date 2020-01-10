const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
var allReservations = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname, "make.html"));
});
app.get("/waitlist", function(req,res){
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/reservations", function(req, res){
    return res.json(allReservations);
});

app.post("/api/add/new", function(req,res){
    allReservations.push(req.body);
    console.log(allReservations, "all reswrvations");
});


app.listen(PORT, function(){
    console.log("app is running")
})