var express =require("express");
var router = express.Router();

//import model berger.js to use its database functions
var burgers = require("../models/burger.js");

//All the routes and logic setup
router.get("/",function(req,res) {
	res.redirect("/burger");
});

router.get("/burger", function(req, res) {
	//express cb responce by calling burger.selectallburger
	burgers.all(function(burgerData){
		res.render("index.handlebars", {burger_data : burgerData});
	});
});

router.post("/burger/create", function( req, res) {
	burgers.create(req.body.burger_name, function (result) {
		console.log(result);
		res.redirect("/");
	});
});
		
 
 router.put("/burger/update", function(req, res){
 	burgers.update(req.body.burger_id,function(result){
 		console.log(result);
 		res.redirect("/");
 	});
 });

 router.delete("/:id",function(req,res) {
 	var condition = req.params.id;
 	burgers.delete(condition,function() {
 		res.redirect("/");
 	});

 });
 module.exports = router;


		