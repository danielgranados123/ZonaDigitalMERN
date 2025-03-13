// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js"
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"

// Creo una constante que es igual a la liberia que importé
const app = express();

// Que acepte datos de json
app.use(express.json());

// Definir las rutas de las funciones que tendrà la pàgina web
app.use("/api/products", productsRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/branches", branchesRoutes)

// Exporto la constante para poder usar express en otros archivos
export default app;