var connection = require('./connection.js');

function printQuestionMarks(num){
	var arr = [];
	for (var i = 0; i < num ; i++) {
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];
	for(var key in ob) {
		if(Object.hasOwnProperty.call(ob,key)){
		arr.push(key + "=" + ob[key]);
	    }
 	}
 	return arr.toString();
}
var orm = {
	all: function(tablename,cb){
		var queryString = "SELECT * FROM " + tablename + ";";
		connection.query(queryString,function(err,result){
			if (err){
			throw err;	
			} 
			cb(result);
		});
	},

	create: function(table,cols,val,cb){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") "
		queryString += "Values (";
		queryString += printQuestionMarks(val.length);
		queryString += ") ";

		console.log(queryString);
		connection.query(queryString, val ,function(err,result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},

	update: function(table,objColVals,condition,cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString,function(err,result){
			if(err){
				throw err ;
			}
			cb(result);
		});
	},

	delete : function(table,condition, cb){
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err,result){
 			if (err){
 				throw err;
 			}
 				cb(result);
 		
		});
	}
 }


	module.exports = orm;