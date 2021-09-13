// Package dependencies
const { body } = require('express-validator');

const validateName = body('name')
  .not()
  .isEmpty()
  .withMessage('Name is required')
  .isString()
  .withMessage('Name should be a string');

const validateImage = body('image1x1').isString().withMessage('Image should be a string');

/**
 * Holds all the validations for creating a game.
 */
const validateCreateProps = [validateName, validateImage];

module.exports = {
  validateCreateProps,
};
