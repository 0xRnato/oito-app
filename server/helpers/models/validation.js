const validator = require('validator');

const validations = {
  userAccess: {
    email: {
      message: 'Email can not be empty.',
      validate: value => !validator.isEmpty(value),
    },
    password: {
      message: 'The password can not be empty',
      validate: value => !validator.isEmpty(value),
    },
  },
};

module.exports = validations;
