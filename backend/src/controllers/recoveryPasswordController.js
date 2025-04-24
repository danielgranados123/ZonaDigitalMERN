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

        const code = Math.floor(10000 + Math.random() * 90000).toString
        const token = jsonwebtoken.sign(
            {email, code, userType, verified: false},
            config.JWT.secret,
            {expiresIn: "20"}
        )

        res.cookie("tokenRecoveryCode", token, {maxAge: 20*60*1000})

        await sendEmail(
            email,
            "Verification Code | Zona Digital",
            "Hello!",
            HTMLRecoveryEmail(code)

        )
    } catch (error) {
        console.log("error" + error);
    }
};

export default passwordRecoveryController;