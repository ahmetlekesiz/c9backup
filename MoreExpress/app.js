var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/animal/:name", function(req, res){
    var animalName = req.params.name.toLowerCase();
    res.render("animal.ejs", {theName: animalName});
});

app.get("/posts", function(req, res) {
   var posts = [
       {title: "Seçim Sonuçları Açıklandı", author: "Cem"},
       {title: "Fenerbahçe Galatasaray Derbisi", author: "Erdem"},
       {title: "Okullar tatil", author: "Ahmet"}
    ];
    
    res.render("posts.ejs", {posts: posts});
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started...");
})