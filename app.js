var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var methodOverride =require('method-override');

app.use(express.static('public')); 

// express 설정
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// /home
app.get("/", function(req,res){
	res.render("index");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});