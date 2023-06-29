import  express from "express";
import cadastroclientes from "./cadastroClienteRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "curso de node111112"})
    })


   app.use(
     express.json(),
     cadastroclientes
    )
}

export default routes;