// Importo todo lo de la libreria de Express
import express from "express";

// Creo una constante que es igual a la liberia que importé
const app = express();

// Definir las rutas de las funciones que tendrà la pàgina web
app.use("api/products")

// Exporto la constante para poder usar express en otros archivos
export default app;