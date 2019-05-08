var express = require("express");
var request = require("request");
var app = express();

app.get("/request", function(req, res){
    var search = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + search + "&apikey=thewdb";
    request(url, function(error, respond, body){
        var data = JSON.parse(body);
        res.render("request.ejs", {data: data});
    });
});

app.get("/", function(req, res){
    res.render("search.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("movie app has started...");
});