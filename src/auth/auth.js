import accessRules from './rules'

const users = [
  { _id: 1, username: 'user', password: 'user', role: 'user' },
  { _id: 2, username: 'admin', password: 'admin', role: 'admin' },
]

const guest = {
  id: null,
  name: 'Guest',
  role: '?',
  token: null,
}

const auth = {
  ...guest,

  login(loginId, password) {
    return new Promise((resolve, reject)=> {
      var user = users.find(u => u.username==loginId && u.password==password)
      setTimeout(() => {
        if (user) {
          // set data returned from api server
          this.id = user._id
          this.role = user.role
          this.name = user.username
          var d = new Date()
          d.setMinutes(d.getMinutes()+5)
          this.token = {
            value: 'returned by api',
            expiredOn: d
          }

          resolve(user)
        } else {
          reject('Invalid login information')
        }
      }, 100) // fake async
    })
  },

  logout() {
    return new Promise((resolve, reject) => {
      Object.assign(this, guest)
      setTimeout(() => resolve(1), 100) // fake async
    })
  },

  isGuest() {
    return !this.id || !this.token || this.token.expiredOn < Date()
  },

  can(permission) {
    var role = this.role
    return accessRules.some(rule => {
      var { permission, roles:allowedRoles } = rule
      var matchRole = allowedRoles.indexOf(role)>-1
      var matchPermission = rule.permission==permission
      return matchRole && matchPermission
    })
  }
}

export default auth