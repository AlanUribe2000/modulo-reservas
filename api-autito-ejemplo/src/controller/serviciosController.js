const serviciosModel = require('../models/serviciosModel');

const registrarServicios = async (req,res)  => {

    try{
        const {nombre,precio,estado} = req.body;
        const registerServicios = await serviciosModel.setServicios({
            nombre,precio,estado
        });
       
        res.send({data: registerServicios})

    }catch{
        console.log("error al registrar el servicio");
    }
}

const obtenerServicios = async (req,res)  => {

    try{
        const servicio = await serviciosModel.getServicios();
        res.send({data: servicio})

    }catch{
        console.log("error al obtener los servicios");
    }
}


module.exports = {registrarServicios,obtenerServicios}