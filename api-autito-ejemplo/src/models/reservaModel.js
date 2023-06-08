const pool = require('../config/db');

const getReservas = async (req, res) => {
    const response = await pool.query('SELECT * FROM reserva')
    res.status(200).json(response.rows);
}

const setReserva = async (data) => {
    const query = 'INSERT INTO reserva (id_user_usuario,fecha_hora_inicio,fecha_hora_fin) VALUES ($1, $2, $3)';
    const values = [data.id_user_usuario, data.fecha_hora_inicio, data.fecha_hora_fin];
    try {
        const result = await pool.query(query, values);
        console.log('Reserva creada exitosamente');
      } catch (error) {
        console.error('Error al crear la reserva', error);
      }
};

module.exports = {getReservas,setReserva}