import express  from "express";
import auth from "../middleware/auth.js";
import RotaController from "../controllers/rotaController.js";



const router = express.Router();

router
 .get("/rotas",  RotaController.ListarRotas) 
 .post("/rota",  RotaController.SalvarRota) 
 .delete("/rota/:id", RotaController.DeleteRota) 
 
export default router;