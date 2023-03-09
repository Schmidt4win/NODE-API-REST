import express  from "express";
import LivroController from "../controllers/livrosController.js";


const router = express.Router();

router
 .get("/livros", LivroController.ListarLivros)
 .get("/livros/busca", LivroController.listarLivroporEditora)
 .get("/livros/:id", LivroController.listarLivrosporId)
 .post("/livros", LivroController.CadastrarLivro)
 .put("/livros/:id", LivroController.atualizarLivro)
 .delete("/livros/:id", LivroController.excluirLivro)

export default router;