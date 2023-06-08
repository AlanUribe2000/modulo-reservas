const { Pool } = require('pg');
//var Pool = require('mysql')
//conexion a base de datos
const pool = new Pool({
//var pool = Pool.createConnection({
    host:'localhost',
    user:'postgres',
    password:'admin',
    database:'dbsistemareservas',
    port: '5432'
    //port:'3306'//,
    //multipleStatements: true
});

module.exports = pool;