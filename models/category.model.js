const mongoose = require("mongoose");
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

const categorySchema = mongoose.model("category", categorySchema);

module.exports = categorySchema;
