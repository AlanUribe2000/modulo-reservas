const userEspacioModel = require('../models/userEspacioModel');

const registrarUserEspacio = async (req,res)  => {

    try{
        const {id_user,id_espacio} = req.body;
        const registerUserEspacio = await userEspacioModel.setUserEspacios({
            id_user,id_espacio
        });
       
        res.send({data: registerUserEspacio})

    }catch{
        console.log("error al registrar el user espacio");
    }
}

const obtenerUserEspacio = async (req,res)  => {

    try{
        const userEspacio = await userEspacioModel.getUserEspacios();
        res.send({data: userEspacio})

    }catch{
        console.log("error al obtener los user espacio");
    }
}


module.exports = {registrarUserEspacio,obtenerUserEspacio}