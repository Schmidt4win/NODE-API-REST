import mongoose, { Schema } from "mongoose";

const rotaSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, require: true },
    pointA: { type: Object, require: true },
    pointB: { type: Object, require: true },
    waypoints: { type: Array, require: true },
});

const rota = mongoose.model("Rota", rotaSchema);

export default rota;