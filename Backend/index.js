import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";

const app = express();

app.use("/home",express.static('frontend'))

app.use(express.json());

dotenv.config();

app.use("/categorias", categoriasRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`);
});