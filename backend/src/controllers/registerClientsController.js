import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";
import clientsModel from "../models/Clients.js";
import { config } from "../config.js";

// Array de funciones
const registerClientsController = {};

registerClientsController.registerClients = async (req, res) => {
    const {
        name, 
        lastName, 
        birthday, 
        email, 
        password, 
        phone, 
        dui,
        isVerified
    } = req.body;

    try {
        const existingClient = await clientsModel.findOne({email})
        if(existingClient){
            return res.json({message: "Client already exists"})
        }

        const passwordHash = await bcryptjs.hash(password, 10)
        const newClient = new clientsModel({
            name, 
            lastName, 
            birthday, 
            email, 
            password: passwordHash, 
            phone, 
            dui: dui || null,
            isVerified: isVerified || false,
        })

        await newClient.save()

        // Generar código de verificación
        const verificationCode = crypto.randomBytes(3).toString("hex")
        const expiresAt = Date.now() + 1 * 60 * 60 * 1000 ;

        const tokenCode = jsonwebtoken.sign(
            {email, verificationCode, expiresAt},
            config.JWT.secret,
            {expiresIn: config.JWT.expiresIn},
            (error, token) => {
                if(error) console.log("error" + error);
                res.cookie("verificationToken", token, { maxAg: 1 * 60 * 60 * 1000 })
            }
        )

        //Enviar correo
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.email.user,
                pass: config.email.pass
            }
        })

        const mailOptions = {
            from: config.email.user,
            to: email,
            subject: "Verificación de correo | Zona Digital",
            text: `Para verificar que eres el dueño de la cuenta, utiliza este código: ${verificationCode}\n Este código expira en 1 hora.\n No lo compartas con nadie.`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) console.log("error" + error)
                res.json({message: "Email sent"})
        })

        res.json({message: "Client registered, Please verify your email"})
    } catch (error) {
        res.json({message: "error" + error})
    }
}

    registerClientsController.verifyEmailCode = async (req, res) => {
        const { verificationCode } = req.body;
        const token = req.cookies.verificationToken;

        if(!token){
            return res.json({message: "Please register your accoount first"})
        }

        try {
            const decoded = jsonwebtoken.verify(token, config.JWT.secret)
            const {email, verificationCode: storedCode} = decoded;

            if(verificationCode !== storedCode){
                return res.json({message: "Invalid verification code"})
            }

            const client = await clientsModel.findOne({email})
            if(!client){
                return res.json({message: "Client not found"})
            }

            client.isVerified = true,
            await client.save();

            res.clearCookie("verificationToken")

            res.json({message: "Email verified succesfully"})
        } catch (error) {
            res.json({message: "error" + error})
        }
    }

export default registerClientsController;
