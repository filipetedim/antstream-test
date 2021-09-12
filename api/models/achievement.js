// Package dependencies
const Mongoose = require('mongoose');

// Schema
const AchievementSchema = Mongoose.Schema({
  parentComponent: { type: String, required: true },
  name: { type: String, required: true },
  sizeWidth: { type: Number, required: true },
  sizeHeight: { type: Number, required: true },
  image: { type: String, required: false },
});

// Model
module.exports = Mongoose.model('Achievement', AchievementSchema);
