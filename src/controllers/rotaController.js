import rota from "../models/rotaModel.js";


class RotaController {
  
  static ListarRotas = (req, res) => {
    rota
      .find((err, rota) => {
        res.status(200).json(rota);
      })
      .sort({ _id: -1 });
  };

  static SalvarRota = (req, res) => {
    let novaRota = new rota(req.body);
    novaRota.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar rota.` });
      } else {
        res.status(200).send({ message: `tudo certo ao cadastrar rota.` });
      }
    });
  };
  static DeleteRota = (req, res) => {
    let id = req.params.id;
    rota.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao deletar Cliente.` });
      } else {
        res.status(201).send({ message: `Rota deletada com sucesso` });
      }
    });
  };
}

export default RotaController;