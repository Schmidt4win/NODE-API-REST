import express  from "express";
import TalaoController from "../controllers/talaoController.js"


const router = express.Router();

router
 .get("/talaoget", TalaoController.ListarTalao)
 .get("/talaoget/:id", TalaoController.listarTalaoPorId)
 .post("/cadastrotalaopost", TalaoController.CadastrarTalao)
 .put("/talaoput/:id", TalaoController.atualizarTalao)
 .delete("/talaodelete/:id", TalaoController.excluirTalao)

export default router;