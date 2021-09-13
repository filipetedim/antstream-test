// Package dependencies
const Mongoose = require('mongoose');

// Schema
const GameSchema = Mongoose.Schema({
  // parentComponent: [{ type: String, required: true }],
  name: { type: String, required: true },
  // sizeWidth: { type: Number, required: true },
  // sizeHeight: { type: Number, required: true },
  // image: { type: String, required: false },
  image: { type: String, required: true },
  categories: [{ name: String, height: Number, width: Number, image: String }],
});

// Model
module.exports = Mongoose.model('Game', GameSchema);
