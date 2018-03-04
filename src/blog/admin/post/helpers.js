import validate from 'validate.js'

export function validatePostData(data) {
  var rules = {
    title: {
      presence: { allowEmpty: false },
    },
    content: {
      presence: { allowEmpty: false },
    },
  }
  return validate(data, rules, { format: 'grouped' })
}
