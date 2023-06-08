const salonServiciosModel = require('../models/salonServiciosModel');

const registrarSalonServicios = async (req,res)  => {

    try{
        const {id_salon,id_servicio} = req.body;
        const registerSalonServicios = await salonServiciosModel.setSalonServicios({
            id_salon,id_servicio
        });
       
        res.send({data: registerSalonServicios})

    }catch{
        console.log("error al registrar el salon servicio");
    }
}

const obtenerSalonServicios = async (req,res)  => {

    try{
        const salonServicio = await salonServiciosModel.getSalonServicios();
        res.send({data: salonServicio})

    }catch{
        console.log("error al obtener los salones servicios");
    }
}


module.exports = {registrarSalonServicios,obtenerSalonServicios}