// Package dependencies
const { body } = require('express-validator');

const validateName = body('name')
  .not()
  .isEmpty()
  .withMessage('Name is required')
  .isString()
  .withMessage('Name should be a string');

/**
 * Holds all the validations for creating an achievement.
 */
const validateCreateProps = [validateName];

module.exports = {
  validateCreateProps,
};
