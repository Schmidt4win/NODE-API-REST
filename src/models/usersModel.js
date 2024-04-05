import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, require: true},
  password: { type: String },
  category: { type: String, require: true },
  token: { type: String },
});

const user = mongoose.model("user", UserSchema);

export default user;