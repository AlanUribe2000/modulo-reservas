const pool = require('../config/db');

const getSalones = async (req, res) => {
    const response = await pool.query('SELECT * FROM salon')
    res.status(200).json(response.rows);
}

const setSalon = async (data) => {
    const query = 'INSERT INTO salon (id_espacio,nombre,capacidad,precio) VALUES ($1, $2, $3, $4)';
    const values = [data.id_espacio, data.nombre, data.capacidad, data.precio];
    try {
        const result = await pool.query(query, values);
        console.log('Salon creado exitosamente');
      } catch (error) {
        console.error('Error al crear el salon', error);
      }
};

module.exports = {getSalones,setSalon}