// Package dependencies
const Express = require('express');

// Controllers
const { getAchievements, createAchievement } = require('../controllers/achievement');

// Middlewares
const { validateCreateProps } = require('../middlewares/validations/achievement');

// Init
const router = Express.Router();

// Endpoints
router.get('/', getAchievements);
router.post('/', validateCreateProps, createAchievement);

module.exports = router;
