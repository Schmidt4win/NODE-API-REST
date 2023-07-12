import mongoose from "mongoose";

const talaoSchema = new mongoose.Schema({
  id: { type: String },
  remessa: {
    type: String,
    required: true,
  },
  lote: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  quantidadePares: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  cortador: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  data_hora: {
    type: String,
    required: true,
  },
});

const TalaoSchema = mongoose.model("Talao", talaoSchema);

export default TalaoSchema;
