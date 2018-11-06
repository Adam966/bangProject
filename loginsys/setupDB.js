var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bang",
  password: "password"
});

con.connect(function(err) 
{
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE bangusers", function (err, result) 
  {
     if (err) throw err;
     console.log("Database created");
  });
  con.query("USE bangusers", function (err, result) 
  {
	 if (err) throw err;
     console.log("Database selected");
  });
  var ctable = "CREATE TABLE Users (ID INT AUTO_INCREMENT PRIMARY KEY, UserName VARCHAR(50) NOT NULL, Email VARCHAR(50) NOT NULL, Password VARCHAR(150) NOT NULL)";
  con.query(ctable, function (err, result)
  {
     if (err) throw err;
     console.log("Table created");
  });
});