const pool = require('../config/db');
const express = require('express');
const app = express();

const getUsers = async (req, res) => {
    pool.query('SELECT * FROM user', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
      } else {
        console.error(results);
        res.json(results.rows);
        //console.log(results.rows);
      }
    });

  //return "hola"
    //const response = await pool.query('SELECT * FROM user')
    //res.status(200).json(response.rows);
}

const setUser = async (data) => {
    const query = 'INSERT INTO user (user,name,lastname,email,password) VALUES ($1, $2, $3, $4, $5)';
    const values = [data.user, data.name, data.lastname, data.email, data.password];
    try {
        const result = await pool.query(query, values);
        console.log('Usuario creado exitosamente');
      } catch (error) {
        console.error('Error al crear el usuario', error);
      }
};

module.exports = {getUsers,setUser}