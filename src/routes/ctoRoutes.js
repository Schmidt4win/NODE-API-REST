import express  from "express";
import ctoController from "../controllers/ctoController.js";
import auth from "../middleware/auth.js";



const router = express.Router();

router
 .get("/ctos",  ctoController.Listarctos) 
 .post("/cto",  ctoController.Salvarcto) 
 .delete("/cto/:id", ctoController.deleteCto) 
 
export default router;