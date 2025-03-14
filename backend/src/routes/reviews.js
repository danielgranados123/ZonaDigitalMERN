import express from "express";
import reviewsController from "../controllers/reviewsController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(reviewsController.getReviews)
.post(reviewsController.createReviews) 

router.route("/:id")
.put(reviewsController.updateReviews)
.delete(reviewsController.deleteReviews)

export default router;