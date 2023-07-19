var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'example',
  database : 'crud'
});
 
connection.connect();
module.exports=connection;
