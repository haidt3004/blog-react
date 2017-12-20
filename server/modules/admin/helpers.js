const validate = require("validate.js")

function validateLoginForm(data) {
	var rules = {
		loginId: {
			presence: { message: "^Email can't be blank" },
		},
		password: {
			presence: true,
		},
	}
	return validate(data, rules, { format: "grouped" });
}

module.exports = {
	validateLoginForm,
}