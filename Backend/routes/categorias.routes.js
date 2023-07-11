import express from "express";
import { obtenerCategorias, agregarCategoria, borrarCategoria, actualizarCategoria } from "../controllers/categoria.controllers.js";

const router = express.Router();

router.get("/all",obtenerCategorias);
router.post("/add", agregarCategoria);
router.delete("/del/:id", borrarCategoria);
router.patch("/upd/:id", actualizarCategoria);

export default router;