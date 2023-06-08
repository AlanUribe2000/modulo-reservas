const pool = require('../config/db');

const getServicios = async (req, res) => {
    const response = await pool.query('SELECT * FROM servicios')
    res.status(200).json(response.rows);
}

const setServicios = async (data) => {
    const query = 'INSERT INTO servicios (nombre,precio,estado) VALUES ($1, $2, $3)';
    const values = [data.nombre, data.precio, data.estado];
    try {
        const result = await pool.query(query, values);
        console.log('servicio creado exitosamente');
      } catch (error) {
        console.error('Error al crear el servicio', error);
      }
};

module.exports = {getServicios,setServicios}