const userModel = require('../models/userModel');

const registrarUser = async (req,res)  => {

    try{
        const {user,name,lastname,email,password} = req.body;
        const registerUser = await userModel.setUser({
            user,name,lastname,email,password
        });
       
        res.send({data: registerUser})

    }catch{
        console.log("error al registrar el usuario");
    }
}

const obtenerUser = async (req,res)  => {

    try{
        const userEspacio = await userModel.getUsers();
        res.send({data: userEspacio})

    }catch{
        console.log("error al obtener los usuarios");
    }
}


module.exports = {registrarUser,obtenerUser}