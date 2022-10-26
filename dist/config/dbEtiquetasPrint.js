require('dotenv').config()

let stringCon = "mysql://" + process.env.DBUSERINTRANET + ":" + process.env.DBPWINTRANET + "@" + process.env.DBHOSTINTRANET + ":3306/" + process.env.DBNAMEINTRANET

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(stringCon);
    //console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {connect}