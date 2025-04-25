import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import clientsModel from "../models/Clients.js";
import employeesModel from "../models/Employees.js";

import { sendEmail, HTMLRecoveryEmail } from "../utils/mailPasswordRecovery.js";
import { config } from "../config.js";

const passwordRecoveryController = {};

passwordRecoveryController.requestCode = async(req, res)=>{
    const { email } = req.body;

    try {
        let userFound;
        let userType;

        userFound = await clientsModel.findOne({email})
        if(userFound){
            userType= "client"
        }
        else{
            userFound = await employeesModel.findOne({email})
            if(userFound){
                userType= "employee"
            }
        }
        if(!userFound){
            res.json({message: "User not found"})
        }

        const code = Math.floor(10000 + Math.random() * 90000).toString();
        const token = jsonwebtoken.sign(
            {email, code, userType, verified: false},
            config.JWT.secret,
            {expiresIn: "20m"}
        )

        res.cookie("tokenRecoveryCode", token, {maxAge: 20*60*1000})

        await sendEmail(
            email,
            "Verification Code | Zona Digital",
            "Hello!",
            HTMLRecoveryEmail(code)

        )

        res.json({message: "Code sent successfully"})
    } catch (error) {
        console.log("error" + error);
    }
};

passwordRecoveryController.verifyCode = async (req, res) => {
    const { code } = req.body;

    try {
        const token = req.cookies.tokenRecoveryCode

        const decoded = jsonwebtoken.verify(token, config.JWT.secret)

        if(decoded.code !== code){
            return res.json({message: "Invalid code"})
        }

        const newToken = jsonwebtoken.sign(
            {
                email: decoded.email, 
                code: decoded.code,
                userType: decoded.userType,
                verified: true
            },

            config.JWT.secret,

            {expiresIn: "20m"}
        )

        res.cookie("tokenRecoveryCode", newToken, {maxAge: 20*60*1000})

        res.json({message: "Code verified successfully"})
    } catch (error) {
        console.log("error" + error)
    }
}
 
export default passwordRecoveryController;