// Array de métodos (CRUD)
const productsController = {};
import productsModel from "../models/Products.js"

// SELECT
productsController.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products)
};

// INSERT
productsController.createProducts = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const newProduct = new productsModel({ name, description, price, stock });
    await newProduct.save()
    res.json({ message: "Product saved"})
};

// DELETE
productsController.deleteProducts = async (req, res) => {
    await productsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Product deleted"})
};

// UPDATE
productsController.updateProducts = async (req, res) => {
    const { name, description, price, stock } = req.body;
    await productsModel.findByIdAndUpdate(req.params.id, {
        name,
        description,
        price,
        stock
    }, {new: true}
    );

    res.json({ message: "Product updated"})
};

export default productsController;