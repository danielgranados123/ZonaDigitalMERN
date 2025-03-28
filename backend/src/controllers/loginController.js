// Importo ambos modelos
import clientsModel from "../models/Clients.js"
import employeesModel from "../models/Employees.js"
import bcryptjs from "bcryptjs";
import JsonWebToken from "jsonwebtoken";
import { config } from "../config.js"

// Array de funciones
const loginController = {};

loginController.login = async(req, res)=> {
    // Pedimos lo que vamos a ocupar
    const {email, password} = req.body;

    try {
        // Validamos los tres posibles niveles
        // 1. Admin
        // 2. Empleado
        // 3. Cliente

        let userFound; // Guarda el usuario encontrado
        let userType; // Guarda el tipo de usuario encontrado

        // 1. Admin
        if(email === config.ADMIN.emailAdmin && password === config.ADMIN.passwordAdmin) {
            userType = "admin";
            userFound = {_id: "admin"};
        }else{
            // 2. Empleado
            userFound = await employeesModel.findOne({email})
            userType = "employee"
            if(!userFound){
                // 3. Cliente
                userFound = await clientsModel.findOne({email})
                userType = "client"
            }
        }

        if(!userFound){
            return res.json({message: "User not found"})
        }

        // Validar la contraseña (solo si no es admin)
        if(userType !== "admin"){
            const isMatch = await bcryptjs.compare(password, userFound.password)
            if(!isMatch){
                return res.json({message: "Invalid password"})
            }
        }

        
        // TOKEN
        JsonWebToken.sign(
            {id: userFound._id, userType},
            config.JWT.secret,
            {expiresIn: config.JWT.expiresIn},
            (error, token)=> {
                if(error) console.log("error" + error)
                res.cookie("authToken", token)
                res.json({message: "Login succesful"})
            }
        )
    } catch (error) {
        console.log("error" + error)
    }
}

export default loginController;