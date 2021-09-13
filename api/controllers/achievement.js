// Package dependencies
const { validationResult } = require('express-validator');

// Models
const Achievement = require('../models/achievement');

/**
 * Gets all achievements.
 */
const getAchievements = (req, res) => {
  Achievement.find()
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ message: 'Something went wrong', error }));
};

/**
 * Creates an achievement.
 */
const createAchievement = (req, res) => {
  if (!validationResult(req).isEmpty()) {
    return res.status(400).json({ validationErrors: validationResult(req).array() });
  }

  const { name, sizeWidth, sizeHeight, image } = req.body;
  const newAchievement = new Achievement({ name, sizeWidth, sizeHeight, image });

  newAchievement
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json({ message: 'Something went wrong', error }));
};

module.exports = {
  getAchievements,
  createAchievement,
};
