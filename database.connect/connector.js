const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "database-1-aws.clthddioeqff.ap-southeast-1.rds.amazonaws.com",
  database: "clouddb",
  port: 3306,
  user: "admin",
  password: "12345678",
});

// debug connnect to database?
connect.connect(function (err) {
  if (err) {
    console.log("You will Error");
    console.log(err);
  } else {
    console.log("Database Connected!!");
  }
});

module.exports = connect;
