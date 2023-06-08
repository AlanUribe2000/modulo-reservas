const tipoCanchaModel = require('../models/tipoCanchaModel');

const registrarTipoCancha = async (req,res)  => {

    try{
        const {nombre,capacidad} = req.body;
        const registerTipoCancha = await tipoCanchaModel.setTipoCancha({
            nombre,capacidad
        });
       
        res.send({data: registerTipoCancha})

    }catch{
        console.log("error al registrar el tipo cancha");
    }
}

const obtenerTipoCancha = async (req,res)  => {

    try{
        const tipoCancha = await tipoCanchaModel.getTipoCancha();
        res.send({data: tipoCancha})

    }catch{
        console.log("error al obtener los tipos de cancha");
    }
}


module.exports = {registrarTipoCancha,obtenerTipoCancha}