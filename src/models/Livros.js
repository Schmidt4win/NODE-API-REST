import mongoose, { Schema } from "mongoose";

const LivroSchema = new mongoose.Schema(
     {
       id: {type: String},
       titulo: {type: String, require: true}, 
       autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', require: true},
       editora: {type: String, require: true},
       numeroPaginas: {type: Number}
 }
);

const livros= mongoose.model('livros', LivroSchema);

export default livros;