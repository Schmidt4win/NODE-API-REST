import mongoose, { Schema } from "mongoose";

const CtoSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, require: true},
  lat: { type: String },
  lng: { type: String } 
});

const cto = mongoose.model("Cto", CtoSchema);

export default cto;