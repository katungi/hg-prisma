import mongoose from "mongoose";
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const categoryModel = mongoose.model("category", categorySchema);

export default categorySchema;
