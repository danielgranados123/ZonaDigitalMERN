// Importo todo lo de la libreria de Express
import express from "express";

import productsRoutes from "./src/routes/products.js"
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviewsRoutes from "./src/routes/reviews.js"
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import registerClients from "./src/routes/registerClients.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import providersRoutes from "./src/routes/providers.js"
import cookieParser from "cookie-parser";

import cors from "cors";


// Creo una constante que es igual a la liberia que importé
const app = express();

// Que acepte datos de json
app.use(express.json());
// Que postman acepte guardar cookies
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Dominio del cliente
    credentials: true, // Permitir envío de cookies y credenciales
  })
);

// Definir las rutas de las funciones que tendrà la pàgina web
app.use("/api/products", productsRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/branches", branchesRoutes)
app.use("/api/reviews", reviewsRoutes)

app.use("/api/registerEmployees", registerEmployeesRoutes)
app.use("/api/registerClients", registerClients)
app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes)

app.use("/api/providers", providersRoutes)

app.use("/api/recoveryPassword", recoveryPasswordRoutes)


// Exporto la constante para poder usar express en otros archivos
export default app;