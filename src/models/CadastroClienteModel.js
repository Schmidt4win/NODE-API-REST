import mongoose, { Schema }  from "mongoose";

const CadastroClienteScheema = new mongoose.Schema({
    id: {type: String},
    nomeCliente: {type: String, required: true},
    cidade: {type: String, required: true},
    telefone: {type: String, required: true},
    servico: {type: String, required: true},
    valor: {type: Number, required: true},
    data_hora: {type: String, required: true},
    data: {type: String, required: true}
},
{
versionKey: false
}
) 

const cadastroCliente = mongoose.model("cadastroCliente", CadastroClienteScheema)

export default cadastroCliente;
 