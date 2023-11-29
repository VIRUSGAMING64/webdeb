
function log(data) {
    console.log(data)
}

log("error: ")
var mysql = require('mysql');
con = mysql.createConnection({
    host: "Tyismsg.mssql.somee.com",
    user: "virusgaming_SQLLogin_2 ",
    password: "VIRUSGAMING64"
});


con.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});
