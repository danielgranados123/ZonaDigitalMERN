// Array de métodos (CRUD)
const providersController = {};
import providersModel from "../models/Providers.js"
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js"

//Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})


// SELECT
providersController.getProviders = async (req, res) => {
    const provider = await providersModel.find()
    res.json(provider)
};

// INSERT
providersController.createProviders = async (req, res) => {
    const { name, phone } = req.body;
    let imageURL = ""

    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png", "jpg", "svg", "jpeg"]
            }
        )
        
        imageURL = result.secure_url
    }

    const newProvider = new providersModel({ name, phone, image: imageURL });
    await newProvider.save()
    res.json({ message: "Provider saved"})
};

/*// DELETE
providersController.deleteProviders = async (req, res) => {
    await providersModel.findOneAndDelete(req.params.id)
    res.json({ message: "Provider deleted"})
};

// UPDATE
providersController.updateProviders = async (req, res) => {
    const { name, phone, imageURL } = req.body;
    await providersModel.findByIdAndUpdate(req.params.id, {
        name,
        phone,
        imageURL
    }, {new: true}
    );

    res.json({ message: "Provider updated"})
};*/

export default providersController;