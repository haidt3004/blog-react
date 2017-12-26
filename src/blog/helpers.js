import validate from 'validate.js'

export function validatePostData(data) {
  var rules = {
    title: {
      presence: true,
    },
    content: {
      presence: true,
    },
  }
  return validate(data, rules, { format: 'grouped' })
}
