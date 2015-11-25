var mongoose = require('mongoose');
var check = require("./app/pangram.js");
var connection=require("./connection.js");

mongoose.connect('mongodb://localhost:27017/test',function(err,db) {
	if(err) {
		console.log(err);
	}
	else 
	{
		var val=check(process.argv[2])
		console.log(val)
		
	}
})
 


