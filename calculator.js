// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/hello", function(req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    res.send(`The resu lt is ${num1+num2}`);

});



app.listen(1000, function() {
    console.log("server is running on port 3000");
});

app.get("/student", function(req, res) {
    res.send('I love Cherry');
});
