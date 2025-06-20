import express from "express";
import salesController from "../controllers/salesController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.post(salesController.insertSales) 

router.route("/category")
.get(salesController.salesByCategory)

router.route("/best-selling")
.get(salesController.bestSellingProducts)

router.route("/frequent-customers")
.get(salesController.frequentCustomer)

router.route("/total-earnings")
.get(salesController.totalEarnings)

export default router;