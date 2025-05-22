import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js"

export const validateAuthToken = (allowedUserTypes)=>{
    return (req, res, next) =>{
        try {
            // Extraer token de las cookies
            const { authToken } = req.cookies;

            // Error si no ha iniciado sesión
            if(!authToken){
                res.json({message: "No auth token found, you must log in"})
            }

            // Obtener info del token
            const decoded = jsonwebtoken.verify(authToken, config.JWT.secret)

            // Verificar acceso de roles
            if(!allowedUserTypes.includes(decoded.userType)){
                return res.json({message: "Access denied"})
            }

        } catch (error) {
            res.json({message: "error" + error})
        }
    }
}