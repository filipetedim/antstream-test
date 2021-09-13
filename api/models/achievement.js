// Package dependencies
const Mongoose = require('mongoose');

// Schema
const AchievementSchema = Mongoose.Schema({
  name: { type: String, required: true },
});

// Model
module.exports = Mongoose.model('Achievement', AchievementSchema);
