/*
    Campos:
        name
        lastName
        birthday (esto es de tipo Date o lo puden poner como String)
        email
        address
        hireDate (esto es de tipo Date o lo puden poner como String)
        password
        telephone
        dui
        isssNumber
        isVerified (esto es booleano)
*/

import { Schema, model } from "mongoose";

const employeeSchema =  new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birthday: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String
    },
    hireDate: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    dui: {
        type: String,
        require: true
    },
    isssNumber: {
        type: Number
    },
    isVerified: {
        type: Boolean
    },
}, {
    timestamps: true,
    strict: false
});

export default model("Employees", employeeSchema);
