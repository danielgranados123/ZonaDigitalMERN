// Importo la libreria que acabo de instalar
import dotenv from "dotenv";

// Ejecuto "dotenv" que me ayudará a acceder al .env
dotenv.config();

export const config = {
    db: {
        URI: 
            process.env.DB_URI || "mongodb://localhost:27017/ZonaDigitalDB20200008",

    },
    server: {
        port:
            process.env.PORT || 4000,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES,
    },
    ADMIN: {
        emailAdmin : process.env.ADMIN_EMAIL,
        passwordAdmin: process.env.ADMIN_PASSWORD
    },
    email: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
}