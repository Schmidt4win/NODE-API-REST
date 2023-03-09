import express  from "express";
import AutorController from "../controllers/autorController.js";


const router = express.Router();

router
 .get("/autores", AutorController.ListarAutores)
 .get("/autores/:id", AutorController.listarAutoresporId)
 .post("/autores", AutorController.CadastrarAutor)
 .put("/autores/:id", AutorController.atualizarAutor)
 .delete("/autores/:id", AutorController.excluirAutor)

export default router;