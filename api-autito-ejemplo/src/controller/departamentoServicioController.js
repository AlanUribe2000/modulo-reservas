const departamentoServicioModel = require('../models/departamentoServicioModel');

const registrarDepartamentoServicio = async (req,res)  => {

    try{
        const {id_departamento,id_servicios} = req.body;
        const registerDptoServicio = await departamentoServicioModel.setDepartamentoServicios({
            id_departamento,id_servicios
        });
       
        res.send({data: registerDptoServicio})

    }catch{
        console.log("error en registro de departamento servicio");
    }
}

const obtenerDepartamentoServicio = async (req,res)  => {

    try{
        const dptoServicio = await departamentoServicioModel.getDepartamentoServicios();
        res.send({data: dptoServicio})

    }catch{
        console.log("error al obtener departamento servicio");
    }
}


module.exports = {registrarDepartamentoServicio,obtenerDepartamentoServicio}