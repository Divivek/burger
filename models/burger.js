var orm =require("../config/orm.js");

var burger = {	
	all : function(cb) {
		orm.all("burgers",function(res) {
			cb(res);
	});
},

	create : function(name,cb) {
		orm.create("burgers",[
			"burger_name", "deVoured"],[
			name,false],cb);
},

	update : function(id,cb)  {
		var condition = " id = "  + id;
		orm.update("burgers", {deVoured : true},condition,cb);
},
	
	delete : function(id,cb) {
		var condition = " id = "  + id;
		orm.delete("burgers",condition,function(res){
			cb(res);
		});
	}
};
	

	module.exports = burger;