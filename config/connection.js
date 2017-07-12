var mysql = require('mysql');
var connection;
		console.log(" connecting: JSWDB" + process.env.JSWSDB_URL);

if(process.env.JSWSDB_URL) {
		console.log(" connecting: JSWDB" );

	connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
		console.log(" connecting: LOCAL" );

 connection = mysql.createConnection({
	host: 'localhost',
	port : '3306',
	user: 'root',
	password: '***********',
	database: "burgers_db"
});
};

connection.connect(function(err) {
	if(err) {
		console.log("error connecting:" + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});
	
 

module.exports = connection;
