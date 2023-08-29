require('dotenv').config();
const { createPool } = require('mysql');

const connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPW,
    database: process.env.dbName,
    port: process.env.dbPort,

    multipleStatements: true,
    connectionLimit: 50
});

module.exports = connection;