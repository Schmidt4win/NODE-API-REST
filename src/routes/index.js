import  express from "express";
import cadastroclientes from "./cadastroClienteRoutes.js";
import talao from "./talaoRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "REST API"})
    })


   app.use(
     express.json(),
     cadastroclientes,
     talao
    )
}

export default routes;