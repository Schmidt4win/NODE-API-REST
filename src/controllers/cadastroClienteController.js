import cadastroCliente from "../models/CadastroClienteModel.js";

class CadastroClienteController {

static ListarCadastroCliente = (req, res) => {
    cadastroClienpte.find((err, cadastroCliente)=>{
    res.status(200).json(cadastroCliente)
}).sort({_id: -1})
}

static listarCadastroClienteporId = (req, res) => {
    const id = req.params.id;
    cadastroCliente.findById(id, (err, cadastroCliente) =>{
        if(err) {
            res.status(400).send({message: `${erro.message} - id não encontrado`})
        } else {
            res.status(200).send(cadastroCliente);
        }
    })
}

static CadastrarCadastroCliente = (req, res) => {
    let cadastroClienteNovo = new cadastroCliente(req.body);
    cadastroClienteNovo.save((err) =>{
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
        } else{
            res.status(201).send(cadastroClienteNovo.toJSON())
        }
    })
}

static atualizarCadastroCliente = (req, res) => {
    const id = req.params.id;

    cadastroCliente.findByIdAndUpdate (id, {$set: req.body}, (err) => {
        if(!err) {
            res.status(200).send({message: 'Autor atualizado com susseso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
    
}

static excluirCadastroCliente = (req, res) => {
    const id = req.params.id;
    cadastroCliente.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: 'Autor removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}

}

export default CadastroClienteController