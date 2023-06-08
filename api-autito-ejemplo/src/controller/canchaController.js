const canchaModel = require('../models/canchaModel');

const registrarCancha = async (req,res)  => {

    try{
        const {id_espacio, id_tipo, material, numero, precio} = req.body;
        const registerCancha = await canchaModel.setCancha({
            id_espacio,
            id_tipo,
            material,
            numero,
            precio
        });
       
        res.send({data: registerCancha})

    }catch{
        console.log("error al registrar usuario");
    }
}

const obtenerCanchas = async (req,res)  => {

    try{
        const cancha = await canchaModel.getCanchas();
        res.send({data: cancha})

    }catch{
        console.log("error al obtener las canchas");
    }
}


module.exports = {registrarCancha,obtenerCanchas}