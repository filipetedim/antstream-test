// Package dependencies
const Express = require('express');

// Init
const router = Express.Router();

// Routes
// TODO: import routes here

// Registrations
// TODO: add routes here
router.use((req, res) => res.status(404).json({ message: `${req.originalUrl} not found` }));

module.exports = router;
