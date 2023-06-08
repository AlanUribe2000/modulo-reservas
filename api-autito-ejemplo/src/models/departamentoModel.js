const pool = require('../config/db');

const getDepartamentos = async (req, res) => {
    const response = await pool.query('SELECT * FROM departamento')
    res.status(200).json(response.rows);
}

const setDepartamentos = async (data) => {
    const query = 'INSERT INTO departamento (nombre,capacidad,tipo,estado) VALUES ($1, $2, $3, $4)';
    const values = [data.nombre, data.capacidad, data.tipo, data.estado];
    try {
        const result = await pool.query(query, values);
        console.log('Departamento creado exitosamente');
      } catch (error) {
        console.error('Error al crear el departamento', error);
      }
};

module.exports = {getDepartamentos, setDepartamentos}