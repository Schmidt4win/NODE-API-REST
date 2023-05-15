import mongoose from "mongoose";

mongoose.connect("mongodb+srv://schmidtsistemasintegrados:ribeiromaquinas123@ribeiromaquinas.dpm58pm.mongodb.net/")

let db = mongoose.connection;

export default db;