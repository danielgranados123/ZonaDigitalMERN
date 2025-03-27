import employeesModel from "../models/Employees.js"
import bcryptjs from "bcryptjs"; //Encriptar
import jsonwebtoken from "jsonwebtoken"; //Token
import { config } from "../config.js"

// Creamos un array de funciones
const registerEmployeesController = {};

registerEmployeesController.register = async(req, res)=> {
    const {
        name, 
        lastName,
        birthday,
        email,
        address,
        password,
        hireDate,
        telephone,
        dui,
        isVerified,
        isssNumber
    } = req.body

    try {
        // 1- Verificamos si el empleado ya existe
        const existEmployee = await employeesModel.findOne({email})
        if(existEmployee) {
            return res.json({message: "Employee already exist"})
        }

        // 2- Encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10)

        // 3- Guardar al usuario en la base de datos
        const newEmployee = new employeesModel({
            name, 
            lastName,
            birthday,
            email,
            address,
            password,
            hireDate,
            telephone,
            dui,
            isVerified,
            isssNumber
        })

        await newEmployee.save();
        
        // TOKEN
        jsonwebtoken.sign(
            // 1- Qué voy a guardar
            {id: newEmployee._id},
            // 2 - secreto
            config-JsonWebTokenError.secret,
            // 3- Cuándo expira
            {expiresIn: config.JWT.expiresIn},
            // 4- Función flecha
            (error, token) =>{
                if(error) console.log("error" + error)

                res.cookie("authToken",token)
                res.json({message: "Employee saved"})
            }
        )
    
    } catch (error) {
        console.log("error" + error)
        res.json({message: "Error saving employee"})
    }
}

export default registerEmployeesController;