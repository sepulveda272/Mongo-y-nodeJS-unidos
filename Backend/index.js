import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import cors from "cors";
import categoriasRouter from "./routes/categorias.routes.js";

const app = express();

app.use(express.json());

const configCors = {
    methods: ['POST','GET','PATCH','DELETE']
}

app.use(cors(configCors))

dotenv.config();

app.use("/categorias", categoriasRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`);
});