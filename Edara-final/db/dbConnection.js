const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "edra_dashboard",
    port: "3306",
});
connection.connect((err)=>{
    if(err) throw err;
    console.log("DB CONNECTED");
});

module.exports = connection;