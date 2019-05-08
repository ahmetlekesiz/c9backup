var express = require('express');

var app = express();

app.get("/", function(req, res){
    res.send("Hi there!sikktrrir");
    console.log("get request to /")
});


app.get("/bye", function(req, res){
    res.send("Goodbye!");
});


//Server Listener
app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server started.");
});