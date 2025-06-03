/*
    Campos:
        name
        lastName
        birthday
        email
        password
        telephone
        dui
        isVerified (esto es booleano)
*/

import { Schema, model } from "mongoose";

const clientSchema =  new Schema({
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
    isVerified: {
        type: Boolean
    },
}, {
    timestamps: true,
    strict: false
});

export default model("Clients", clientSchema);
