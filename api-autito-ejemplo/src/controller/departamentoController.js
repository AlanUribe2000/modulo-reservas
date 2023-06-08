const departamentoModel = require('../models/departamentoModel');

const registrarDepartamento = async (req,res)  => {

    try{
        const {nombre,capacidad,tipo,estado} = req.body;
        const registerDpto = await departamentoModel.setDepartamentos({
            nombre,capacidad,tipo,estado
        });
       
        res.send({data: registerDpto})

    }catch{
        console.log("error al registrar el departamento");
    }
}

const obtenerDepartamentos = async (req,res)  => {

    try{
        const dpto = await departamentoModel.getDepartamentos();
        res.send({data: cancha})

    }catch{
        console.log("error al obtener el departamento");
    }
}


module.exports = {registrarDepartamento,obtenerDepartamentos}