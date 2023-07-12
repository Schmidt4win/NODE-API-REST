import TalaoSchema from "../models/TalaoModel.js";

class TalaoController  {
    static ListarTalao = (req, res) => {
        TalaoSchema.find((err, talao)=>{
        res.status(200).json(talao)
    }).sort({_id: -1})
    }
    
    static listarTalaoPorId = (req, res) => {
        const id = req.params.id;
        TalaoSchema.findById(id, (err, talao) =>{
            if(err) {
                res.status(400).send({message: `${erro.message} - id não encontrado`})
            } else {
                res.status(200).send(talao);
            }
        })
    }
    
    static CadastrarTalao = (req, res) => {
        let TalaoSchemaNovo = new TalaoSchema(req.body);
        TalaoSchemaNovo.save((err) =>{
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
            } else{
                res.status(201).send(TalaoSchemaNovo)
            }
        })
    }
    
    static atualizarTalao = (req, res) => {
        const id = req.params.id;
    
        TalaoSchema.findByIdAndUpdate (id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado com susseso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
        
    }
    
    static excluirTalao = (req, res) => {
        const id = req.params.id;
        TalaoSchema.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Talao removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    
    }

export default TalaoController;