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

module.exports = {
  getGames,
};
