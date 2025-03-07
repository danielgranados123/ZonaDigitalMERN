// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js"

// Creo una constante que es igual a la liberia que importé
const app = express();

// Que acepte datos de json
app.use(express.json());

// Definir las rutas de las funciones que tendrà la pàgina web
app.use("/api/products", productsRoutes)

// Exporto la constante para poder usar express en otros archivos
export default app;