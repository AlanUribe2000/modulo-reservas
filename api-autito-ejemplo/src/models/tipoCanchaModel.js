const pool = require('../config/db');

const getTipoCancha = async (req, res) => {
    const response = await pool.query('SELECT * FROM tipo_cancha')
    res.status(200).json(response.rows);
}

const setTipoCancha = async (data) => {
    const query = 'INSERT INTO tipo_cancha (nombre,capacidad) VALUES ($1, $2)';
    const values = [data.nombre, data.capacidad];
    try {
        const result = await pool.query(query, values);
        console.log('tipo de cancha creado exitosamente');
      } catch (error) {
        console.error('Error al crear un tipo de cancha', error);
      }
};

module.exports = {getTipoCancha,setTipoCancha}