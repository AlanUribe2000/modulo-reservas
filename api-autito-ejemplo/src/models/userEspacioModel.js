const pool = require('../config/db');

const getUserEspacios = async (req, res) => {
    const response = await pool.query('SELECT * FROM user_espacio')
    res.status(200).json(response.rows);
}

const setUserEspacios = async (data) => {
    const query = 'INSERT INTO user_espacio (id_user,id_espacio) VALUES ($1, $2)';
    const values = [data.id_user, data.id_espacio];
    try {
        const result = await pool.query(query, values);
        console.log('Todo bien con user espacio');
      } catch (error) {
        console.error('Error con user espacio', error);
      }
};

module.exports = {getUserEspacios,setUserEspacios}