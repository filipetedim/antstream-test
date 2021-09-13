// Package dependencies
const { body } = require('express-validator');

const validateName = body('name')
  .not()
  .isEmpty()
  .withMessage('Name is required')
  .isString()
  .withMessage('Name should be a string');

const validateImage = body('image').isString().withMessage('Image should be a string');

const validateCategories = body('categories')
  .isArray()
  .withMessage('Categories should be an array');

/**
 * Holds all the validations for creating a game.
 */
const validateCreateProps = [validateName, validateImage, validateCategories];

module.exports = {
  validateCreateProps,
};
