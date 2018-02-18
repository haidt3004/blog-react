import validate from 'validate.js'

/**
 * Get value of nested property by path
 *
 * @param {Mixed} obj
 * @param {String} path
 * @param {Mixed} defVal default value when the result is undefined
 */
export function getObjectValue(obj, keyPath, defVal) {
  var result = validate.getDeepObjectValue(obj, keyPath)
  return result ? result : defVal
}

export function saveIdentityToStorage(value) {
  saveItemToStorage('identity', value)
}

export function loadIdentityFromStorage() {
  return loadItemFromStorage('identity')
}

export function validateIdentity(identity) {
  const { token: { value, expiredAt } } = identity
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
  return str === null ? null : JSON.parse(str)
}

/**
 * Get component's display name
 *
 * @param {Component} Component
 */
export function getComponentName(Component) {
  return Component.displayName || Component.name || 'Component'
}

/**
 * Helper function used to create action creator function
 *
 * @param {String} type
 */
export function createAction(type) {
  return payload => ({ type, payload })
}