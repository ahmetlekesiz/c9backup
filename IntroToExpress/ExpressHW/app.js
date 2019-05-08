var express = require("express");
var app = express();

//===================
//ROUTES
//===================


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig : "Oink",
        cow :  "Moo",
        dog : "Woof Woof!",
        cat : "Meooowwwwuwuwuw!"
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says: '" + sound + "'"); 
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word;
    var number = parseInt(req.params.number);
    var output = "";
    for(var i=0; i<number; i++){
        output = output + word + " ";
    }
    res.send(output);
});

app.get("*", function(req, res) {
   res.send("404 - Sorryy, page is not found. What are you doing with your life? :(") 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("lol");
})