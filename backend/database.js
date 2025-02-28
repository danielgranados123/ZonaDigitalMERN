import mongoose from "mongoose";

// 1- Configuro la URI o direccion de la base de datos
const URI = "mongodb://localhost:27017/ZonaDigitalDB20200008"

// 2- Conecto la base de datos
mongoose.connect(URI);

// Comprobar todo
// 3- Creo una constante que es igual a la conexión
const connection =  mongoose.connection;

//Veo si funciona
connection.once("open", () => {
    console.log("DB is connected");
});

//Veo si se desconectó
connection.on("disconnected", () => {
    console.log("DB is disconnected");
});

//Veo si hay un error
connection.once("error", () => {
    console.log("error found" + error);
});