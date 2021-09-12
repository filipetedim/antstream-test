// Package dependencies
const Express = require('express');

// Controllers
const { getGames, createGame } = require('../controllers/game');

// Middlewares
const { validateCreateProps } = require('../middlewares/validations/game');

// Init
const router = Express.Router();

// Endpoints
router.get('/', getGames);
router.post('/', validateCreateProps, createGame);

module.exports = router;
