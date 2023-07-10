import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`);
});