// Array de métodos (CRUD)
const branchesController = {};
import branchesModel from "../models/Branches.js"

// SELECT
branchesController.getBranches = async (req, res) => {
    const branch = await branchesModel.find()
    res.json(branch)
};

// INSERT
branchesController.createBranches = async (req, res) => {
    const { name, address, telephone, schedule } = req.body;
    const newBranch = new branchesModel({ name, address, telephone, schedule });
    await newBranch.save()
    res.json({ message: "Branch saved"})
};

// DELETE
branchesController.deleteBranches = async (req, res) => {
    await branchesModel.findOneAndDelete(req.params.id)
    res.json({ message: "Branch deleted"})
};

// UPDATE
branchesController.updateBranches = async (req, res) => {
    const { name, address, telephone, schedule } = req.body;
    await branchesModel.findByIdAndUpdate(req.params.id, 
    {
        name,
        address, 
        telephone, 
        schedule
    }, {new: true}
    );

    res.json({ message: "Branch updated"})
};

export default branchesController;