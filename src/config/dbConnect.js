import mongoose from "mongoose";

mongoose.connect("string de conexão ao banco")

let db = mongoose.connection;

export default db;