const reservaModel = require('../models/reservaModel');

const registrarReserva = async (req,res)  => {

    try{
        const {id_user_usuario,fecha_hora_inicio,fecha_hora_fin} = req.body;
        const registerEspacio = await reservaModel.setReserva({
            id_user_usuario,fecha_hora_inicio,fecha_hora_fin
        });
       
        res.send({data: registerEspacio})

    }catch{
        console.log("error al registrar la reserva");
    }
}

const obtenerReservas = async (req,res)  => {

    try{
        const reserva = await reservaModel.getReservas();
        res.send({data: reserva})

    }catch{
        console.log("error al obtener las reservas");
    }
}


module.exports = {registrarReserva,obtenerReservas}