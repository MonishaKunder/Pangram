var mongoose = require('mongoose');

module.exports=function(){
	var charschema = new mongoose.Schema({
		sen:String,
		charCount:{}
	})

 	return mongoose.model('charcollection',charschema);
 }