const pool = require('../config/db');

const getSalonServicios = async (req, res) => {
    const response = await pool.query('SELECT * FROM salon_servicios')
    res.status(200).json(response.rows);
}

const setSalonServicios = async (data) => {
    const query = 'INSERT INTO salon_servicios (id_salon,id_servicio) VALUES ($1, $2)';
    const values = [data.id_salon, data.id_servicio];
    try {
        const result = await pool.query(query, values);
        console.log('Todo bien con salon_servicios');
      } catch (error) {
        console.error('Error con salon_servicios', error);
      }
};

module.exports = {getSalonServicios,setSalonServicios}