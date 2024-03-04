import express  from "express";
import UserController from "../controllers/usersController.js";
import auth from "../middleware/auth.js";



const router = express.Router();

router
 .get("/users",  UserController.ListarUsers) // lista todos os usurios do db
 .post("/users",  UserController.RegisterUser) // cadastra usuario no db
 .put("/users/:id", UserController.atualizarUser) // atualiza usuario no db pelo id
 .delete("/users/:id", UserController.excluirUser) // deleta o usuario no db pelo id
 .get("/users/:id", auth, UserController.ListarUsersPorId) // lista usuario pelo id
 .post("/login", UserController.userLogin) // login do usuario 
export default router;