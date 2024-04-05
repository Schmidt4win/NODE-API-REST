import cto from "../models/CtoModel.js";

class ctoController {
  
  static Listarctos = (req, res) => {
    cto
      .find((err, cto) => {
        res.status(200).json(cto);
      })
      .sort({ _id: -1 });
  };

  static Salvarcto = (req, res) => {
    let novaCto = new cto(req.body);
    novaCto.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar cto.` });
      } else {
        res.status(200).send({ message: `tudo certo ao cadastrar cto.` });
      }
    });
  };
  static deleteCto = (req, res) => {
    let id = req.params.id;
    cto.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao deletar Cliente.` });
      } else {
        res.status(201).send({ message: `Cto deletada com sucesso` });
      }
    });
  };
}

export default ctoController;