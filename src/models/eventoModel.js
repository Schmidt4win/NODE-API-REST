import mongoose, { Schema } from "mongoose";

const eventoSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, require: true},
  lat: { type: String },
  lng: { type: String },
  texto: {type: String}
});

const evento = mongoose.model("Evento", eventoSchema);

export default evento;