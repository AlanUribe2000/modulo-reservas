const { Router } = require('express');
const router = Router();
const { registrarCancha, obtenerCanchas} = require('../controller/canchaController')
const { registrarDepartamento, obtenerDepartamentos} = require('../controller/departamentoController')
const { registrarDepartamentoServicio, obtenerDepartamentoServicio} = require('../controller/departamentoServicioController')
const { registrarEspacio, obtenerEspacios} = require('../controller/espacioController')
const { registrarReserva, obtenerReservas} = require('../controller/reservaController')
const { registrarSalon, obtenerSalon} = require('../controller/salonController')
const { registrarSalonServicios, obtenerSalonServicios} = require('../controller/salonServiciosController')
const { registrarServicios, obtenerServicios} = require('../controller/serviciosController')
const { registrarTipoCancha, obtenerTipoCancha} = require('../controller/tipoCanchaController')
const { registrarUser, obtenerUser} = require('../controller/userController')
const { registrarUserEspacio, obtenerUserEspacio} = require('../controller/userEspacioController')

//routes get
router.get('/api/obtenerCanchas', obtenerCanchas);
router.get('/api/obtenerDepartamentos', obtenerDepartamentos);
router.get('/api/obtenerDepartamentoServicio', obtenerDepartamentoServicio);
router.get('/api/obtenerEspacios', obtenerEspacios);
router.get('/api/obtenerReservas', obtenerReservas);
router.get('/api/obtenerSalon', obtenerSalon);
router.get('/api/obtenerSalonServicios', obtenerSalonServicios);
router.get('/api/obtenerServicios', obtenerServicios);
router.get('/api/obtenerTipoCancha', obtenerTipoCancha);
router.get('/api/obtenerUser', obtenerUser);
router.get('/api/obtenerUserEspacio', obtenerUserEspacio);
//routes post
router.post('/api/registrarCancha', registrarCancha);
router.post('/api/registrarDepartamento', registrarDepartamento);
router.post('/api/registrarDepartamentoServicio', registrarDepartamentoServicio);
router.post('/api/registrarEspacio', registrarEspacio);
router.post('/api/registrarReserva', registrarReserva);
router.post('/api/registrarSalon', registrarSalon);
router.post('/api/registrarSalonServicios', registrarSalonServicios);
router.post('/api/registrarServicios', registrarServicios);
router.post('/api/registrarTipoCancha', registrarTipoCancha);
router.post('/api/registrarUser', registrarUser);
router.post('/api/registrarUserEspacio', registrarUserEspacio);

const express = require('express');
const app = express();
const pool = require('./db');

app.get('/usuarios', (req, res) => {
  pool.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al obtener los usuarios');
    } else {
      res.json(results.rows);
    }
  });
});

module.exports = router;