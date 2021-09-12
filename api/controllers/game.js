// Package dependencies
const { validationResult } = require('express-validator');

// Models
const Game = require('../models/game');

/**
 * Gets all games.
 */
const getGames = (req, res) => {
  Game.find()
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ message: 'Something went wrong', error }));
};

/**
 * Creates a game.
 */
const createGame = (req, res) => {
  if (!validationResult(req).isEmpty()) {
    return res.status(400).json({ validationErrors: validationResult(req).array() });
  }

  const { parentComponent, name, sizeWidth, sizeLength, image } = req.body;
  const newGame = new Game({ parentComponent, name, sizeWidth, sizeLength, image });

  newGame
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json({ message: 'Something went wrong', error }));
};

module.exports = {
  getGames,
  createGame,
};
