import express from "express";
import branchesController from "../controllers/branchesController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(branchesController.getBranches)
.post(branchesController.createBranches) 

router.route("/:id")
.put(branchesController.updateBranches)
.delete(branchesController.deleteBranches)

export default router;