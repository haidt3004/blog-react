const ms = require('ms')
const User = require('../common/models/user')
const { validationExc, createAccessToken } = require('../common/helpers')
const { validateLoginForm } = require('./helpers')

async function login (req, res, next) {
	try {
		var data = req.body
		var errors = validateLoginForm(data)
		if (errors) {
			return next(validationExc('Please correct your input.', errors))
		}

		var user = await User.findOne({ email: data.loginId })
		if ( !user || !user.checkPassword(data.password) ) {
			return res.status(400).json(validationExc('Invalid login information.'))
		}

		res.json({
			token: createAccessToken(user, data.remember ? '30 days' : '3h'),
			username: user.username,
			id: user._id
		})
	} catch (err) {
		next(err)
	}
}

module.exports = { login }