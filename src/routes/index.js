import  express from "express";
import users from "./userRoutes.js"
import cto from "./ctoRoutes.js"
import evento from "./eventoRoutes.js"
import rota from "./rotaRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "REST API"})
    })


   app.use(
     express.json(),
     users,
     cto,
     evento,
     rota
    )
}

export default routes;