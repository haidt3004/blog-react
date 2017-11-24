var debug = require('debug');
var error = debug('app:error');
var info = debug('app:info');

function notFoundExc(message) {
  return {
      status: 404,
      code: 'resource_not_found',
      message: message,
  }
}

function validationExc(message, errors) {
  return {
      status: 400,
      code: 'invalid_data',
      message: message,
      errors: errors
  }
}

module.exports = {
  notFoundExc,
  validationExc,
  error,
  info
}