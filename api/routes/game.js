// Package dependencies
const Express = require('express');

// Controllers
const { getGames } = require('../controllers/game');

// Init
const router = Express.Router();

// Endpoints
router.get('/', getGames);

module.exports = router;
