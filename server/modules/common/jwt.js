const passport = require('passport')
const passportJWT = require('passport-jwt')
const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
const { appSecret } = require('../../config')
const User = require('./models/user')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: appSecret
}

passport.use(new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  User.findById(jwtPayload.userId)
    .then(user => {
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    }).catch(err => done(err, false))
}))

const jwtMiddleware = passport.authenticate('jwt', { session: false })

module.exports = jwtMiddleware