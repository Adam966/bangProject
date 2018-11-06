var mysql = require('mysql');

var connect = mysql.createConnection({
  host: "localhost",
  user: "bang",
  password: "toor"
});

connect.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});