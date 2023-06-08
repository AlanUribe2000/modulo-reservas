const pool = require('../config/db');

const getEspacios = async (req, res) => {
    const response = await pool.query('SELECT * FROM espacio')
    res.status(200).json(response.rows);
}

const setEspacio = async (data) => {
    const query = 'INSERT INTO espacio (id_cancha,id_salon,id_departamento,id_empresa) VALUES ($1, $2, $3, $4)';
    const values = [data.id_cancha, data.id_salon, data.id_departamento, data.id_empresa];
    try {
        const result = await pool.query(query, values);
        console.log('Espacio creado exitosamente');
      } catch (error) {
        console.error('Error al crear el Espacio', error);
      }
};

module.exports = {getEspacios,setEspacio}