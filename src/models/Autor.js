import mongoose, { Schema }  from "mongoose";

const autorScheema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
},
{
versionKey: false
}
) 

const autores = mongoose.model("autores", autorScheema)

export default autores;