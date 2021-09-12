// Package dependencies
const Express = require('express');

// Controllers
const { getGames, createGame } = require('../controllers/game');

// Init
const router = Express.Router();

// Endpoints
router.get('/', getGames);
router.post('/', createGame);

module.exports = router;
