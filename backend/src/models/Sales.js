/*
    Campos:
        product
        category
        customer
        total
        date
*/

import { Schema, model } from "mongoose";

const saleSchema =  new Schema({
    product:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    customer:{
        type: String,

        trim: true
    },
    total:{
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    date:{
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Sales", saleSchema);