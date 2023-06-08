const salonModel = require('../models/salonModel');

const registrarSalon = async (req,res)  => {

    try{
        const {id_espacio,nombre,capacidad,precio} = req.body;
        const registerSalon = await salonModel.setSalon({
            id_espacio,nombre,capacidad,precio
        });
       
        res.send({data: registerSalon})

    }catch{
        console.log("error al registrar la reserva");
    }
}

const obtenerSalon = async (req,res)  => {

    try{
        const salon = await salonModel.getSalones();
        res.send({data: salon})

    }catch{
        console.log("error al obtener las reservas");
    }
}


module.exports = {registrarSalon,obtenerSalon}