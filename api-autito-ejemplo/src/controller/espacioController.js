const espacioModel = require('../models/espacioModel');

const registrarEspacio = async (req,res)  => {

    try{
        const {id_cancha,id_salon,id_departamento,id_empresa} = req.body;
        const registerEspacio = await espacioModel.setEspacio({
            id_cancha,id_salon,id_departamento,id_empresa
        });
       
        res.send({data: registerEspacio})

    }catch{
        console.log("error al registrar el espacio");
    }
}

const obtenerEspacios = async (req,res)  => {

    try{
        const espacio = await espacioModel.getEspacios();
        res.send({data: espacio})

    }catch{
        console.log("error al obtener los espacios");
    }
}


module.exports = {registrarEspacio,obtenerEspacios}