import express  from "express";
import cadastroClienteController from "../controllers/cadastroClienteController.js";


const router = express.Router();

router
 .get("/cadastroclientesget", cadastroClienteController.ListarCadastroCliente)
 .get("/cadastroclientesget/:id", cadastroClienteController.listarCadastroClienteporId)
 .post("/cadastroclientespost", cadastroClienteController.CadastrarCadastroCliente)
 .put("/cadastroclientesput/:id", cadastroClienteController.atualizarCadastroCliente)
 .delete("/cadastroclientesdelete/:id", cadastroClienteController.excluirCadastroCliente)

export default router;