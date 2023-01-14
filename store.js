const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./stores.sqlite3", sqlite.OPEN_READWRITE, (err)=>{
    if (err) return console.error(err);
});

const sql = `CREATE TABLE IF NOT EXISTS users(ID INTEGER PRIMARY KEY,firstName varchar(30), lastName varchar(30), requirement varchar(500), userType varchar(10), email varchar(50), password nvarchar(50), acctVerify bit) ;`;



// const sql = `drop table users`

// const sql = `if not exist(SELECT name FROM sqlite_master WHERE type='table' AND name='users')
// begin
// CREATE TABLE users(ID INTEGER PRIMARY KEY, email varchar(50), password nvarchar(50) ) end`

db.run(sql)