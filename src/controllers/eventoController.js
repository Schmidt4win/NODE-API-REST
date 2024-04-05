import evento from "../models/eventoModel.js";


class eventoController {
  
  static Listareventos = (req, res) => {
    evento
      .find((err, evento) => {
        res.status(200).json(evento);
      })
      .sort({ _id: -1 });
  };

  static Salvarevento = (req, res) => {
    let novoEvento = new evento(req.body);
    novoEvento.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar evento.` });
      } else {
        res.status(200).send({ message: `tudo certo ao cadastrar evento.` });
      }
    });
  };
  static deleteEvento = (req, res) => {
    let id = req.params.id;
    evento.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao deletar Cliente.` });
      } else {
        res.status(201).send({ message: `Evento deletado com sucesso` });
      }
    });
  };
}

export default eventoController;