const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let experienceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: Text,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const experienceModel = mongoose.model("experience", experienceSchema);

module.exports = experienceModel;
