/**
 * Get deep value from object by passing path
 *
 * @param {Mixed} obj
 * @param {String} path
 * @param {Mixed} defVal default value when the result is undefined
 */
export function getObjectValue(obj, path, defVal=undefined) {
  try {
    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
      obj = obj[path[i]]
      if (obj===undefined)
        return defVal
    }
    return obj
  } catch (error) {
    return defVal
  }
}

export function saveIdentity(value) {
  saveItemToStorage('identity', value)
}

export function loadIdentity() {
  return loadItemFromStorage('identity')
}

export function validateIdentity(identity) {
  const { token: { value, expiredAt} } = identity
  if (!value) return false

  var now = new Date()
  var expired = expiredAt ? new Date(expiredAt) : null
  if (!expired || expired < now) return false

  return true
}

export function saveItemToStorage(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value))
}

export function loadItemFromStorage(name) {
  var str = window.localStorage.getItem(name)
  return str===null ? null : JSON.parse(str)
}

export function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

export function getComponentName(Component) {
  return Component.displayName || Component.name || 'Component';
}