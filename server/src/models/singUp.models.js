/*
 * we are going to use it in SignUp.models.js file for  creating user
 */
import mongoose from "mongoose";
const singUp_Schema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const singUp_Model = mongoose.model("User", singUp_Schema);
export default singUp_Model;
