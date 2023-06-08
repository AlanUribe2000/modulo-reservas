const pool = require('../config/db');

const getCanchas = async (req, res) => {
    const response = await pool.query('SELECT * FROM cancha')
    res.status(200).json(response.rows);
}

const setCancha = async (data) => {
    const query = 'INSERT INTO cancha (id_espacio,id_tipo,material,numero,precio) VALUES ($1, $2, $3, $4, $5)';
    const values = [data.id_espacio, data.id_tipo, data.material, data.numero, data.precio];
    try {
        const result = await pool.query(query, values);
        console.log('Cancha creada exitosamente');
      } catch (error) {
        console.error('Error al crear la cancha', error);
      }
};

module.exports = {getCanchas,setCancha}