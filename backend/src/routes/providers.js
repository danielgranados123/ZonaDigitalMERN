import express from "express";
import multer from "multer"
import providersController from "../controllers/providersController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

//Configurar una carpeta local que guarde el registro de las imgs subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(providersController.getProviders)
.post(upload.single("image"), providersController.createProviders) 

/*router.route("/:id")
.put(providersController.updateProviders)
.delete(providersController.deleteProviders)*/

export default router;