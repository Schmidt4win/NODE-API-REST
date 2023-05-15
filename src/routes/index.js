import  express from "express";
import cadastroclientes from "./cadastroClienteRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "curso de node"})
    })


   app.use(
     express.json(),
     cadastroclientes
    )
}

export default routes;