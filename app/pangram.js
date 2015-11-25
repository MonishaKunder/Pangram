var mongoose = require('mongoose');
var charModel=require('../schema/char-schema.js')()
module.exports = function(sentence) {
	var s=sentence.toLowerCase();
	var c={};
	var letters="abcdefghijklmnopqrstuvwxyz";
	
	for(var i=0;i<s.length;i++)
	{
		var aCode=s.charCodeAt(i)
		if(aCode > 96 && aCode < 123)
		{
			if (typeof(c[s[i]]) !== 'undefined')
    			c[s[i]]++;
 			else
  				 c[s[i]]=1;
		}
	}
	var obj={
		sen:sentence,
		charCount:c
	}
	var c1=new charModel(obj)
	c1.save(function(err,doc){
		if(err)
			console.log(err)
		else
			 console.log("Doc stored in database")
				
	})
	
    for(var i=0;i<26;i++)
	{
		if (typeof(c[letters[i]]) === 'undefined')
			return false;
	}
	return true; 

}


