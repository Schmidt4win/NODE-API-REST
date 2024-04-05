import express  from "express";
import eventoController from "../controllers/eventoController.js";
import auth from "../middleware/auth.js";



const router = express.Router();

router
 .get("/eventos",  eventoController.Listareventos) 
 .post("/evento",  eventoController.Salvarevento) 
 .delete("/evento/:id", eventoController.deleteEvento) 
 
export default router;