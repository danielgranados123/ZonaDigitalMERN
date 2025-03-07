import express from "express";

// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get()
.post()
.put()
.delete()
