const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBlogInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.text = !isEmpty(data.text) ? data.text : '';

  //Validation

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Posts must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
