// Package dependencies
const Mongoose = require('mongoose');

// Schema
const GameSchema = Mongoose.Schema({
  // parentComponent: [{ type: String, required: true }],
  name: { type: String, required: true },
  // sizeWidth: { type: Number, required: true },
  // sizeHeight: { type: Number, required: true },
  // image: { type: String, required: false },
  image1x1: { type: String, required: true },
  image2x1: { type: String, required: false },
  image3x1: { type: String, required: false },
  image1x2: { type: String, required: false },
  image1x3: { type: String, required: false },
  categories: [{ name: String, height: Number, width: Number }],
});

// Model
module.exports = Mongoose.model('Game', GameSchema);
