const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
var allReservations = [
    {
        name: "ken",
        phone: "408-232-3233",
        email: "rh@gmail.com",
        id: "3"
    },
    {
        name: "joe",
        phone: "4044-232-3233",
        email: "rdafh@gmail.com",
        id: "4"
    },
    {
        name: "ksden",
        phone: "4000-232-3233",
        email: "rhsdsf@gmail.com",
        id: "6"
    },
    {
        name: "anndy",
        phone: "4528-232-3233",
        email: "rsh@gmail.com",
        id: "7"
    }
];

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