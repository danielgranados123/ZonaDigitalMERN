// Array de métodos (CRUD)
const clientsController = {};
import clientsModel from "../models/Clients.js"

// SELECT
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find()
    res.json(clients)
};

// INSERT
clientsController.createClients = async (req, res) => {
    const { name, lastName, birthday, email, password, phone, dui, isVerified } = req.body;
    const newClient = new clientsModel({ name, lastName, birthday, email, password, phone, dui, isVerified });
    await newClient.save()
    res.json({ message: "Client saved"})
};

// DELETE
clientsController.deleteClients = async (req, res) => {
    await clientsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Client deleted"})
};

// UPDATE
clientsController.updateClients = async (req, res) => {
    const { name, lastName, birthday, email, password, phone, dui, isVerified } = req.body;
    await clientsModel.findByIdAndUpdate(req.params.id, {
        name, 
        lastName, 
        birthday, 
        email, 
        password, 
        phone, 
        dui, 
        isVerified
    }, {new: true}
    );

    res.json({ message: "Client updated"})
};

export default clientsController;