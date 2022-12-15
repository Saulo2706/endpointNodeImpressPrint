require('dotenv').config()

module.exports = function () {

    let mysql = require('mysql2')
    //let connCreds = require('./connectionsConfig.json');

    //Establish Connection to the DB
    let connection = mysql.createConnection({
        host: process.env.DBHOSTINTRANET,
        user: process.env.DBUSERINTRANET,
        password: process.env.DBPWINTRANET,
        database: process.env.DBNAMEINTRANET,
        port: 3306
    });

    //Instantiate the connection
    connection.connect(function (err) {
        if (err) {
            console.log(`connectionRequest Failed ${err.stack}`)
        } else {
            console.log(`DB connectionRequest Successful ${connection.threadId}`)
        }
    });

    //return connection object
    return connection
}
