// Package dependencies
const Express = require('express');

// Init
const router = Express.Router();

// Routes
const Game = require('./game');
const Achievement = require('./achievement');

// Registrations
router.use('/games', Game);
router.use('/achievements', Achievement);
router.use((req, res) => res.status(404).json({ message: `${req.originalUrl} not found` }));

module.exports = router;
