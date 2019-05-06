const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProductInput(data) {
  let errors = {};

  data.product = !isEmpty(data.product) ? data.product : '';
  data.popular = !isEmpty(data.popular) ? data.popular : '';
  data.action = !isEmpty(data.action) ? data.action : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.model = !isEmpty(data.model) ? data.model : '';

  //Validation

  if (Validator.isEmpty(data.product)) {
    errors.product = 'Text field is required';
  }
  if (Validator.isEmpty(data.popular)) {
    errors.popular = 'Popular field is required';
  }

  if (Validator.isEmpty(data.action)) {
    errors.action = 'Action field is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  if (Validator.isEmpty(data.model)) {
    errors.model = 'Model field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
