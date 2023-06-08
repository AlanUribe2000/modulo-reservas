const pool = require('../config/db');

const getDepartamentoServicios = async (req, res) => {
    const response = await pool.query('SELECT * FROM departamento_servicios')
    res.status(200).json(response.rows);
}

const setDepartamentoServicios = async (data) => {
    const query = 'INSERT INTO departamento (id_departamento,id_servicios) VALUES ($1, $2)';
    const values = [data.id_departamento, data.id_servicios];
    try {
        const result = await pool.query(query, values);
        console.log('Todo bien en departamento_servicio');
      } catch (error) {
        console.error('Error en la tabla departamento_servicio', error);
      }
};

module.exports = {getDepartamentoServicios,setDepartamentoServicios}