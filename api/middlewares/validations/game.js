// Package dependencies
const { body } = require('express-validator');

const validateParentComponent = body('parentComponent')
  .not()
  .isEmpty()
  .withMessage('Parent Component is required')
  .isArray()
  .withMessage('Parent Component should be an array');

const validateName = body('name')
  .not()
  .isEmpty()
  .withMessage('Name is required')
  .isString()
  .withMessage('Name should be a string');

const validateSizeWidth = body('sizeWidth')
  .not()
  .isEmpty()
  .withMessage('Size Width is required')
  .isNumeric()
  .withMessage('Size Width should be a number')
  .custom((value) => value > 0 && value < 8 && Number.isInteger(value))
  .withMessage('Size Width should be an integer between 0 and 8');

const validateSizeHeight = body('sizeHeight')
  .not()
  .isEmpty()
  .withMessage('Size Height is required')
  .isNumeric()
  .withMessage('Size Height should be a number')
  .custom((value) => value > 0 && value < 8 && Number.isInteger(value))
  .withMessage('Size Height should be an integer between 0 and 8');

const validateImage = body('image').isString().withMessage('Image should be a string');

/**
 * Holds all the validations for creating a game.
 */
const validateCreateProps = [
  validateParentComponent,
  validateName,
  validateSizeWidth,
  validateSizeHeight,
  validateImage,
];

module.exports = {
  validateCreateProps,
};
