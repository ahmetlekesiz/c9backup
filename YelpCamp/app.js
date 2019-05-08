var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon chek", image: "https://newhampshirestateparks.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name: "Grano hill", image: "https://www.planetware.com/photos-large/USUT/utah-zion-national-park-camping-south-campground.jpg"},
    {name: "Mountain Goat", image: "https://www.tripsavvy.com/thmb/hD3_T2KhE8gQXrD-I560zKfH2iQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/4008019776_66cfa6ac4a_o-5660b3095f9b583386bbda64.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp's server started."); 
});